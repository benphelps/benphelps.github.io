// audiophile-infographic.js

let filteredTerms = termsData;
let currentPrimaryFilter = "all";
let currentSubcategoryFilter = "all";
let allSubcategories = [];

// FlexSearch setup
const index = new FlexSearch.Document({
  document: {
    id: "term",
    index: [
      { field: "tags", tokenize: "forward", weight: 8 },
      { field: "term", tokenize: "forward", weight: 8 },
      { field: "summary", tokenize: "forward", weight: 4 },
      { field: "shortExplanation", tokenize: "forward", weight: 2 },
      { field: "detailedDescription", tokenize: "forward", weight: 1 },
    ],
  },
});
termsData.forEach((term) => index.add(term));

function init() {
    extractSubcategories();
    createSubcategoryFilters();
    setupEventListeners();
    filterTerms();
    createFrequencyChart();
    setupChartControls();
}

function extractSubcategories() {
    const subcategorySet = new Set();
    termsData.forEach(term => {
        term.subCategories.forEach(subCat => {
            subcategorySet.add(subCat);
        });
    });
    allSubcategories = Array.from(subcategorySet).sort();
}

function createSubcategoryFilters() {
    const container = document.getElementById("subcategoryFilters");
    
    // Add "All" button
    const allBtn = document.createElement("button");
    allBtn.className = "filter-btn active subcategory-btn";
    allBtn.setAttribute("data-filter", "all");
    allBtn.setAttribute("data-filter-type", "subcategory");
    allBtn.textContent = "All";
    container.appendChild(allBtn);
    
    // Add buttons for each subcategory
    allSubcategories.forEach(subCat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn subcategory-btn";
        btn.setAttribute("data-filter", subCat);
        btn.setAttribute("data-filter-type", "subcategory");
        btn.textContent = subCat;
        container.appendChild(btn);
    });
}

function renderTerms(terms, query = "") {
  const grid = document.getElementById("termsGrid");
  grid.innerHTML = "";

  terms.forEach((term) => {
    const card = createTermCard(term, query);
    grid.appendChild(card);
  });

  // Update results counter
  const counter = document.getElementById("resultsCounter");
  if (counter) {
    const total = termsData.length;
    const showing = terms.length;
    if (showing === total) {
      counter.textContent = `Showing all ${total} terms`;
    } else {
      counter.textContent = `Showing ${showing} of ${total} terms`;
    }
  }
}

function highlightText(text, query) {
  if (!query) return text;
  // Escape regex special chars in query
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(
    new RegExp(safeQuery, "gi"),
    (match) => `<mark>${match}</mark>`,
  );
}

function createTermCard(termData, query = "") {
  const card = document.createElement("div");
  card.className = `term-card ${termData.primaryCategory}`;
  card.onclick = (e) => {
    e.stopPropagation();
    if (card.classList.contains("expanded")) {
      openModal(termData, query);
    } else {
      document
        .querySelectorAll(".term-card.expanded")
        .forEach((c) => c.classList.remove("expanded"));
      card.classList.add("expanded");
    }
  };
  const sentimentClass = termData.primaryCategory;
  card.innerHTML = `
        <div class="term-header">
            <span class="term-title">${highlightText(termData.term, query)}</span>
            <span class="sentiment-badge ${sentimentClass}"></span>
        </div>
        <p class="term-summary">${highlightText(termData.summary, query)}</p>
        <p class="term-short">${highlightText(termData.shortExplanation, query)}</p>
        <div class="term-tags">
            ${termData.tags
              .map(
                (tag) =>
                  `<span class="tag">${highlightText(tag, query)}</span>`,
              )
              .join("")}
        </div>
    `;
  return card;
}

function highlightText(text, query, className = "") {
  if (!query) return text;
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(
    new RegExp(safeQuery, "gi"),
    (match) =>
      `<mark${className ? ` class="${className}"` : ""}>${match}</mark>`,
  );
}

// Store the current search query globally for modal highlighting
let currentSearchQuery = "";

function openModal(termData, query = "") {
  const modal = document.getElementById("termModal");
  // Use .modal-highlight for subtle modal highlighting
  document.getElementById("modalTitle").innerHTML = highlightText(
    termData.term,
    query,
    "modal-highlight",
  );
  const categoriesHtml = `
        <span class="modal-category ${termData.primaryCategory}">${termData.primaryCategory}</span>
        ${termData.subCategories
          .map((cat) => `<span class="modal-category">${cat}</span>`)
          .join("")}
    `;
  document.getElementById("modalCategories").innerHTML = categoriesHtml;
  document.getElementById("modalSummary").innerHTML = highlightText(
    termData.summary,
    query,
    "modal-highlight",
  );
  document.getElementById("modalShort").innerHTML = highlightText(
    termData.shortExplanation,
    query,
    "modal-highlight",
  );
  document.getElementById("modalDetailed").innerHTML = highlightText(
    termData.detailedDescription,
    query,
    "modal-highlight",
  );
  const relatedHtml = termData.relatedTerms
    .map(
      (term) =>
        `<span class="related-term" onclick="searchTerm('${term}')">${term}</span>`,
    )
    .join("");
  document.getElementById("modalRelated").innerHTML = relatedHtml;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("termModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  // Reset any expanded term cards
  document
    .querySelectorAll(".term-card.expanded")
    .forEach((card) => card.classList.remove("expanded"));
}

function searchTerm(term) {
  closeModal();
  document.getElementById("searchInput").value = term;
  currentSearchQuery = term;
  filterTerms();
}

function setupEventListeners() {
  document.getElementById("searchInput").addEventListener("input", filterTerms);
  
  // Handle filter button clicks (delegated event handling)
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("filter-btn")) {
      const filterType = e.target.getAttribute("data-filter-type");
      const filterValue = e.target.getAttribute("data-filter");
      
      // Remove active class from buttons of the same type
      const buttonsOfSameType = document.querySelectorAll(`[data-filter-type="${filterType}"]`);
      buttonsOfSameType.forEach(b => b.classList.remove("active"));
      
      // Add active class to clicked button
      e.target.classList.add("active");
      
      // Update the appropriate filter
      if (filterType === "primary") {
        currentPrimaryFilter = filterValue;
      } else if (filterType === "subcategory") {
        currentSubcategoryFilter = filterValue;
      }
      
      filterTerms();
    }
  });

  // Clear filters button
  document.getElementById("clearFilters").addEventListener("click", function() {
    // Reset search input
    document.getElementById("searchInput").value = "";
    currentSearchQuery = "";
    
    // Reset filters
    currentPrimaryFilter = "all";
    currentSubcategoryFilter = "all";
    
    // Reset active states
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });
    document.querySelector('[data-filter="all"][data-filter-type="primary"]').classList.add("active");
    document.querySelector('[data-filter="all"][data-filter-type="subcategory"]').classList.add("active");
    
    // Apply filters
    filterTerms();
  });
  document.getElementById("termModal").addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

async function filterTerms() {
  try {
    const search = document.getElementById("searchInput").value.trim();
    currentSearchQuery = search;
    let filtered = [...termsData];

    // Primary category filtering
    if (currentPrimaryFilter !== "all") {
      filtered = filtered.filter(
        (term) => term.primaryCategory === currentPrimaryFilter,
      );
    }

    // Subcategory filtering
    if (currentSubcategoryFilter !== "all") {
      filtered = filtered.filter(
        (term) => term.subCategories.includes(currentSubcategoryFilter),
      );
    }

    // Search filtering (FlexSearch)
    if (search) {
      const results = await index.searchAsync(search, { enrich: true });
      console.log("FlexSearch raw results:", results);
      
      // Flatten and dedupe by term, mapping back to full objects
      const seen = new Set();
      const searchResults = [];
      results.forEach((group) => {
        group.result.forEach((result) => {
          // Support both string and object result types
          let key = result;
          if (typeof result === "object" && result.term) key = result.term;
          const full = termsData.find((t) => t.term === key);
          if (full && !seen.has(full.term)) {
            searchResults.push(full);
            seen.add(full.term);
          }
        });
      });
      
      // Apply both filters to search results
      filtered = searchResults.filter((term) => {
        const primaryMatch = currentPrimaryFilter === "all" || term.primaryCategory === currentPrimaryFilter;
        const subcategoryMatch = currentSubcategoryFilter === "all" || term.subCategories.includes(currentSubcategoryFilter);
        return primaryMatch && subcategoryMatch;
      });
      console.log("Filtered terms to render:", filtered);
    }

    filteredTerms = filtered;
    renderTerms(filtered, search);
    createFrequencyChart(filtered);
  } catch (error) {
    console.error("Error in filterTerms:", error);
    // Fallback to showing all terms
    filteredTerms = termsData;
    renderTerms(termsData, "");
    createFrequencyChart(termsData);
  }
}

// Frequency chart functionality
function createFrequencyChart(terms) {
  const chartContainer = document.getElementById("frequency-chart");
  if (!chartContainer) return;

  // Use filtered terms if provided, otherwise all terms
  const termsToShow = terms || termsData;

  // Responsive width: use container's width, fixed aspect ratio
  const width = chartContainer.offsetWidth || 800;
  const height = 500;
  const margin = { top: 40, right: 60, bottom: 60, left: 90 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Clear existing content
  chartContainer.innerHTML = "";

  // Create D3 SVG and main group with margin transform
  const svg = d3
    .select(chartContainer)
    .append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Create D3 scales
  const xScale = d3.scaleLog().domain([20, 20000]).range([0, chartWidth]);

  const yScale = d3.scaleLinear().domain([-1, 1]).range([chartHeight, 0]);

  // Create axes
  const xAxis = d3
    .axisBottom(xScale)
    .tickValues([20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000])
    .tickFormat((d) => (d >= 1000 ? `${d / 1000}k` : d));

  const yAxis = d3
    .axisLeft(yScale)
    .tickValues([-1, -0.5, 0, 0.5, 1])
    .tickFormat((d) => {
      const labels = {
        "-1": "Very Negative",
        "-0.5": "Negative",
        0: "Neutral",
        0.5: "Positive",
        1: "Very Positive",
      };
      return labels[d];
    });

  // Add grid lines
  g.append("g")
    .attr("class", "grid x-grid")
    .selectAll("line")
    .data([20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000])
    .enter()
    .append("line")
    .attr("x1", (d) => xScale(d))
    .attr("x2", (d) => xScale(d))
    .attr("y1", 0)
    .attr("y2", chartHeight)
    .attr("stroke", "#2a2a2a")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "2,2");

  g.append("g")
    .attr("class", "grid y-grid")
    .selectAll("line")
    .data([-1, -0.5, 0, 0.5, 1])
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("x2", chartWidth)
    .attr("y1", (d) => yScale(d))
    .attr("y2", (d) => yScale(d))
    .attr("stroke", "#2a2a2a")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "2,2");

  // Add axes
  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${chartHeight})`)
    .call(xAxis)
    .selectAll("text")
    .attr("fill", "#a0a0a0")
    .attr("font-size", "12px");

  g.append("g")
    .attr("class", "y-axis")
    .call(yAxis)
    .selectAll("text")
    .attr("fill", "#a0a0a0")
    .attr("font-size", "12px");

  // Remove axis domain lines
  g.selectAll(".x-axis path.domain, .y-axis path.domain").attr(
    "stroke",
    "none",
  );

  // Draw Harman curve
  const harmanLine = d3
    .line()
    .x((d) => xScale(d.frequency))
    .y((d) => yScale(d.db / 25)) // Scale dB to sentiment range
    .curve(d3.curveMonotoneX);

  g.append("path")
    .datum(harmanCurve)
    .attr("class", "harman-curve")
    .attr("d", harmanLine)
    .attr("fill", "none")
    .attr("stroke", "#10b981")
    .attr("stroke-width", 2)
    .attr("opacity", 0.7)
    .style("filter", "drop-shadow(0 0 2px rgba(16, 185, 129, 0.3))");

  // Prepare data for plotting points
  let processedTerms = [];
  termsToShow.forEach((term) => {
    const freqData = frequencyMapping[term.term];
    if (freqData) {
      processedTerms.push({
        ...term,
        frequency: freqData.frequency,
        relevance: freqData.relevance,
        range: freqData.range || [
          freqData.frequency * 0.8,
          freqData.frequency * 1.2,
        ],
      });
    }
  });

  // Position simulation to avoid overlaps
  const simulation = d3
    .forceSimulation(processedTerms)
    .force("x", d3.forceX((d) => xScale(d.frequency)).strength(0.8))
    .force("y", d3.forceY((d) => yScale(d.sentiment)).strength(0.8))
    .force("collide", d3.forceCollide().radius(10).strength(1))
    .stop();

  // Run the simulation
  for (let i = 0; i < 120; i++) {
    simulation.tick();
  }

  // Create a group for frequency ranges that will be displayed on hover
  const rangeGroup = g.append("g").attr("class", "frequency-ranges");

  // Create term points group
  const pointsGroup = g.append("g").attr("class", "term-points");

  // Add the circles
  // Use a power scale for radius to exaggerate differences
  const minR = 4,
    maxR = 10;
  const relExtent = d3.extent(processedTerms, (d) => d.relevance);
  const rScale = d3
    .scalePow()
    .exponent(2)
    .domain(relExtent)
    .range([minR, maxR]);

  const termPoints = pointsGroup
    .selectAll(".term-point")
    .data(processedTerms)
    .enter()
    .append("circle")
    .attr("class", "term-point")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", (d) => rScale(d.relevance))
    .attr("fill", (d) => getColorForSentiment(d.sentiment))
    .attr("stroke-width", 5)
    .attr("stroke", "rgba(255,255,255,0.3)")
    .attr("stroke-width", 2)
    .attr("data-term", (d) => d.term)
    .style("cursor", "pointer")
    .style(
      "filter",
      (d) => `drop-shadow(0 2px 8px ${getGlowForSentiment(d.sentiment)})`,
    )
    .on("mouseover", function (event, d) {
      // Show frequency range
      showFrequencyRange(d, xScale, yScale, rangeGroup);

      // Dim other points
      pointsGroup.selectAll(".term-point").classed("dimmed", function (pd) {
        return pd.term !== d.term;
      });

      // Dim other labels
      pointsGroup.selectAll(".term-label").classed("dimmed", function (pd) {
        return pd.term !== d.term;
      });

      // Show tooltip
      showTooltip(event, d.term, d);
    })
    .on("mouseout", function () {
      // Hide range and restore all points
      rangeGroup.selectAll("*").remove();
      pointsGroup.selectAll(".term-point").classed("dimmed", false);
      pointsGroup.selectAll(".term-label").classed("dimmed", false);

      hideTooltip();
    })
    .on("click", (event, d) => openModal(d));

  // Add term labels
  pointsGroup
    .selectAll(".term-label")
    .data(processedTerms)
    .enter()
    .append("text")
    .attr("class", "term-label")
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y + 22)
    .attr("text-anchor", "middle")
    .attr("font-size", "11px")
    .attr("fill", "#a0a0a0")
    .text((d) => d.term);

  // Add chart title
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "#e0e0e0")
    .text("Frequency Relevancy Chart");

  // Add axes labels
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", height - 10)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#e0e0e0")
    .text("Frequency (Hz)");

  svg
    .append("text")
    .attr("transform", `rotate(-90, 20, ${height / 2})`)
    .attr("x", margin.left - 40)
    .attr("y", height / 2)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#e0e0e0")
    .text("Sentiment");
}

function getColorForSentiment(sentiment) {
  if (sentiment > 0.5) return "#f59e0b99"; // Use site's positive color
  if (sentiment > 0) return "#fbbf2499"; // Use site's positive-glow color
  if (sentiment === 0) return "#6b728099"; // Use site's neutral color
  if (sentiment > -0.5) return "#818cf899"; // Use site's negative-glow color
  return "#6366f199"; // Use site's negative color
}

function getGlowForSentiment(sentiment) {
  // Match the -glow colors from the CSS
  if (sentiment > 0.5) return "#fbbf24cc"; // positive-glow, amber
  if (sentiment > 0) return "#fde68acc"; // lighter amber (use a lighter variant for subtlety)
  if (sentiment === 0) return "#9ca3afcc"; // neutral-glow, gray
  if (sentiment > -0.5) return "#818cf8cc"; // negative-glow, indigo
  return "#818cf8cc"; // negative-glow, indigo (same as above for strong negative)
}

function showFrequencyRange(termData, xScale, yScale, rangeGroup) {
  // Clear any previous ranges
  rangeGroup.selectAll("*").remove();

  // Get the frequency range
  const [minFreq, maxFreq] = termData.range;

  // Draw a rectangle for the frequency range
  rangeGroup
    .append("rect")
    .attr("class", "frequency-range")
    .attr("x", xScale(minFreq))
    .attr("y", 0)
    .attr("width", xScale(maxFreq) - xScale(minFreq))
    .attr("height", yScale(-1) - yScale(1))
    .attr("rx", 4) // rounded corners
    .attr("ry", 4);
}

function showTooltip(event, term, termData) {
  const tooltip = document.getElementById("chart-tooltip") || createTooltip();
  const freqData = frequencyMapping[term];

  // Format sentiment as percentage and determine icon
  const sentimentValue = termData.sentiment;
  const sentimentPercent = Math.abs(sentimentValue * 100).toFixed(0) + "%";

  // Choose appropriate icon based on sentiment
  let sentimentIcon = "";
  if (sentimentValue > 0.5) sentimentIcon = "";
  else if (sentimentValue > 0) sentimentIcon = "";
  else if (sentimentValue === 0) sentimentIcon = "";
  else if (sentimentValue > -0.7) sentimentIcon = "";
  else sentimentIcon = "";

  // Format frequency range nicely
  const minFreq = freqData.range[0];
  const maxFreq = freqData.range[1];
  const formattedMinFreq =
    minFreq >= 1000 ? (minFreq / 1000).toFixed(1) + "kHz" : minFreq + "Hz";
  const formattedMaxFreq =
    maxFreq >= 1000 ? (maxFreq / 1000).toFixed(1) + "kHz" : maxFreq + "Hz";
  const formattedCenterFreq =
    freqData.frequency >= 1000
      ? (freqData.frequency / 1000).toFixed(1) + "kHz"
      : freqData.frequency + "Hz";

  // Make tooltip visible but hidden until positioned
  tooltip.style.visibility = "hidden";
  tooltip.style.display = "block";

  tooltip.innerHTML = `
    <strong>${term}</strong>
    <div class="tooltip-content">
      <div class="tooltip-freq-row">
        <div class="tooltip-freq-item">${termData.summary}</div>
      </div>
      <div class="tooltip-freq-row">
        <div class="tooltip-freq-item">
          <span class="tooltip-value"><span style="color: ${getColorForSentiment(sentimentValue).replace("99", "ff")}; font-size: 12px; margin-left: 4px;">${sentimentIcon}</span></span>
        </div>
        <div class="tooltip-freq-item" style="justify-content: end;">
          <span class="tooltip-value">${formattedMinFreq} - ${formattedMaxFreq}</span>
          <span class="tooltip-icon"></span>
        </div>
      </div>
    </div>
  `;

  // Content is now set, tooltip is hidden but displayed for measurements

  // Get position and size information
  const tooltipWidth = 250; // Max width from CSS
  const tooltipHeight = 150; // Approximate height
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const mouseX = event.pageX || event.x;
  const mouseY = event.pageY || event.y;

  // First set the tooltip at a standard position to calculate its dimensions
  tooltip.style.left = mouseX + 10 + "px";
  tooltip.style.top = mouseY - 10 + "px";

  // Get actual dimensions after rendering
  const tooltipRect = tooltip.getBoundingClientRect();

  // Check if tooltip would go off the right edge
  if (mouseX + tooltipRect.width + 20 > viewportWidth) {
    // Position to the left of the cursor if near right edge
    tooltip.style.left = mouseX - tooltipRect.width - 10 + "px";
  }

  // Check if tooltip would go off the bottom edge
  if (mouseY + tooltipRect.height + 10 > viewportHeight) {
    // Position above cursor if near bottom edge
    tooltip.style.top = mouseY - tooltipRect.height - 10 + "px";
  }

  // Make tooltip visible now that it's properly positioned
  tooltip.style.visibility = "visible";
}

function hideTooltip() {
  const tooltip = document.getElementById("chart-tooltip");
  if (tooltip) {
    tooltip.style.visibility = "hidden";
    tooltip.style.display = "none";
  }
}

function createTooltip() {
  // Check if tooltip already exists
  let tooltip = document.getElementById("chart-tooltip");
  if (tooltip) return tooltip;

  // Create tooltip if it doesn't exist
  tooltip = document.createElement("div");
  tooltip.id = "chart-tooltip";
  tooltip.style.display = "none";
  document.body.appendChild(tooltip);
  return tooltip;
}

function setupChartControls() {
  const toggleBtn = document.getElementById("toggleLabels");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const labels = document.querySelectorAll(".term-label");
      const currentOpacity = labels[0]?.style.opacity || "0.8";
      const newOpacity = currentOpacity === "0" ? "0.8" : "0";

      labels.forEach((label) => {
        label.style.opacity = newOpacity;
      });

      toggleBtn.textContent =
        newOpacity === "0" ? "Show Labels" : "Hide Labels";
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
