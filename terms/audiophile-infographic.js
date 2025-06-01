// audiophile-infographic.js

// Comprehensive audiophile terms data
const termsData = [
  {
    term: "Airy",
    sentiment: 0.8,
    primaryCategory: "positive",
    subCategories: ["Treble Character", "Spatial", "Detail & Texture"],
    summary:
      "An airy sound has a sense of openness and delicate high-frequency extension, giving music a light, spacious quality.",
    shortExplanation:
      "Audio described as <i>airy</i> conveys subtle high-end details and \"space\" around instruments – almost as if the sound has a gentle breeze or open atmosphere to it. This usually comes from excellent treble extension into the highest frequencies (well beyond 10 kHz), allowing the listener to perceive the faint trails of reverb and the natural decay of notes, which adds a feeling of width and openness instead of a closed-in or heavy presentation.",
    detailedDescription:
      "<i>Airiness</i> is a prized quality for many audiophiles because it makes the music feel less confined. Headphones or IEMs with an airy sound signature often have a smooth, extended treble that avoids abrupt roll-off.<br><br>This means you can hear the fine <i>\"air\" or ambience</i> in recordings – for example, the slight echo of a room or the breath in a singer's voice – contributing to a spacious and delicate presentation. An airy headphone can give the impression of a larger soundstage because the treble doesn't feel trapped or muffled.<br><br>By contrast, gear that lacks air might sound <b>closed-off or dull</b>, as if the upper treble details are missing. Airiness is usually mentioned positively, often in open-back headphones or well-tuned earbuds where the highs are <i>ethereal and expansive</i>.<br><br>However, too much emphasis on the highest frequencies can make a headphone <i>sound thin</i> or introduce hiss, so balance is key. When present in the right amount, <i>air</i> adds a pleasing transparency and realism to music, making it sound more lifelike and less congested.",
    relatedTerms: ["Detailed", "Smooth", "Bright", "Spacious"],
    oppositeTerms: ["Veiled", "Dark", "Closed-in"],
    tags: ["openness", "high-frequency", "spacious", "ethereal"],
    technicalRange: "10kHz+",
  },
  {
    term: "Analytical",
    sentiment: 0.0,
    primaryCategory: "neutral",
    subCategories: ["Detail & Texture", "Presentation"],
    summary:
      "An analytical sound is highly detailed, precise, and revealing, often emphasizing clarity over warmth – it lets you hear every little nuance in the music.",
    shortExplanation:
      "Calling a headphone or IEM <i>analytical</i> means it has a very resolving, detail-oriented presentation. Analytical gear tends to have a brighter or flatter tuning that shines a spotlight on micro-details: you'll hear things like subtle instrument textures, recording artifacts, or background sounds more prominently.<br><br>This is great for dissecting recordings or studio monitoring, but it can also come across as <i>cold or clinical</i>, and some listeners find that an overly analytical sound becomes fatiguing over long sessions.",
    detailedDescription:
      "In practice, an analytical headphone prioritizes accuracy and resolution. The frequency response often involves elevated upper mids or treble (to bring out detail) and a tight, controlled bass (to avoid masking any part of the midrange).<br><br>The result is that vocals, instruments, and high-frequency content stand out with crystal clarity – nothing is smoothed over. For example, on an analytical headphone, you might easily pick up the subtle scrape of a guitar pick on strings or a singer's breath intakes.<br><br>Audiophiles who love hearing <i>everything</i> in a track often seek this kind of sound, as it can uncover new elements in familiar music. Synonyms frequently include <i>\"revealing,\" \"transparent,\" or \"resolving\"</i>.<br><br>However, there's a trade-off: analytical gear can lack the cozy or engaging quality of more <i>\"musical\"</i> gear. Because analytical headphones don't add much coloration or warmth, some find the sound less emotional.<br><br>There's also the risk of <b>listener fatigue</b> – a very analytical (often bright) treble can become <i>piercing or exhausting</i> to listen to for a long time.<br><br>This has led to debates in the community: <i>Is an analytical sound inherently better for fidelity, or does it sacrifice enjoyment?</i> The answer is subjective. Many enthusiasts keep both types in their collection: an analytical set for critical listening or mixing, and a warmer, musical set for relaxed enjoyment.<br><br>In summary, <i>analytical</i> is a compliment to technical performance, but whether it's desirable comes down to personal preference and tolerance for brightness.",
    relatedTerms: ["Detailed", "Revealing", "Transparent", "Resolving"],
    oppositeTerms: ["Musical", "Warm", "Smooth"],
    tags: ["detailed", "precise", "clinical", "revealing"],
    technicalRange: "Full spectrum",
  },
  {
    term: "Boomy",
    sentiment: -0.7,
    primaryCategory: "negative",
    subCategories: ["Bass Character", "Dynamics & Speed"],
    summary:
      "Boomy describes bass that is excessively loud and lingering, creating a booming, one-note thump that can overshadow the rest of the music.",
    shortExplanation:
      "When bass is <i>boomy</i>, it means there's too much uncontrolled energy in the mid-bass frequencies (often around ~100–200 Hz), causing a <b>thick, resonant</b> bass response.<br><br>This kind of bass isn't tight or precise – instead, it \"booms\" with a hollow or tubby quality, and it can make the overall sound muddy by bleeding into the midrange.<br><br>Some listeners might enjoy a bit of boominess for added bass presence (for instance in action movies or games, boomy headphones make explosions rumble), but generally in music, boomy bass is considered a detriment because it overwhelms detail and clarity.",
    detailedDescription:
      "<i>Boominess</i> is usually the result of a pronounced hump in the frequency response in the upper bass region, coupled with poor damping. Imagine a subwoofer in a small box – each bass hit doesn't stop cleanly but resonates, causing a lingering <b>\"bwoom\"</b> sound.<br><br>In headphones, a boomy bass often manifests as a bloated, uncontrolled low end: kick drums and bass guitars tend to blur together, and you might feel a constant bass presence even when the song calls for silence between the beats.<br><br>This is <b>not</b> the same as having good deep bass extension or impact; rather, it's a lack of control. Technically, boomy sound often has <b>excessive mid-bass amplitude</b> and not enough damping to quell the vibrations.<br><br>The effect on music is that vocals and instruments lose some clarity, since the booming bass masks nuances (this is related to the concept of <i>masking</i>, where loud low frequencies make it hard to hear mids/highs).<br><br>Community discussions sometimes point out that certain closed-back or bass-heavy consumer headphones (or poorly tuned IEMs) exhibit boominess. The opposite of <i>boomy</i> is <b>\"tight\"</b> or <b>\"clean\"</b> bass, where low frequencies are present but do not spill over.<br><br>While bass lovers (self-described <i>bassheads</i>) do enjoy elevated bass, they typically seek <b>impact and depth without boominess</b> – i.e., powerful yet controlled bass. Therefore, <i>boomy</i> is usually a criticism.<br><br>In EQ terms, reducing the 100–200 Hz region can often tame boominess. In summary, calling a headphone <i>boomy</i> implies it has an unrefined, overdone bass that needs tightening up for a more balanced sound.",
    relatedTerms: ["Muddy", "Loose", "Slow"],
    oppositeTerms: ["Tight", "Clean", "Fast", "Controlled"],
    tags: ["excessive", "resonant", "uncontrolled", "mid-bass"],
    technicalRange: "100-200Hz",
  },
  {
    term: "Bright",
    sentiment: 0.0,
    primaryCategory: "neutral",
    subCategories: ["Treble Character", "Tonal Balance"],
    summary:
      "Bright sound means the treble (high frequencies) is emphasized, giving the audio a vivid, clear, and sometimes sharp quality.",
    shortExplanation:
      "A <i>bright</i> headphone or IEM has stronger output in the upper midrange and treble region, which tends to bring details to the forefront. This can make music sound more <b>crisp and sparkly</b> – for example, cymbals, violins, and vocal hiss (the \"s\" sounds) will be very pronounced.<br><br>A bit of brightness can be positive, adding clarity and air to the presentation so nothing sounds dull. However, if the brightness is excessive or peaky, it can become <b>harsh or fatiguing</b>, causing those high-frequency sounds to be unpleasantly sharp or sibilant.<br><br>Bright-sounding gear is often contrasted with <b>dark</b> or <b>warm</b> gear, which has reduced treble. For many listeners, it's about finding the right balance where music sounds clear but not irritating.",
    detailedDescription:
      "The term <i>bright</i> is extremely common in audiophile discussions and usually straightforward to grasp: imagine turning up the treble knob on an equalizer – the sound gets brighter.<br><br>Bright headphones emphasize high-pitched details, which can be great for hearing everything in complex recordings. They often give the impression of high <b>detail retrieval</b> because things like the attack of a snare drum or the ring of a high piano note stand out. Many studio-oriented headphones (and certain audiophile ones like some Beyerdynamic models) are considered bright.<br><br>Listeners who enjoy brightness often describe the sound as <b>vibrant, airy, or energetic</b>, since the added treble can make music feel \"alive.\" In fact, brightness <i>to a moderate degree</i> can help make vocals and instruments sound <b>clearer in the mix</b>, combating any sense of veil.<br><br>On the flip side, <i>too much</i> brightness leads to issues. A bright headphone that isn't well-controlled might introduce listening fatigue because our ears are sensitive to prolonged high-frequency energy. Terms like <b>\"sharp,\" \"edgy,\" \"strident,\" or \"grating\"</b> may appear when someone finds a headphone's treble harsh.<br><br>Also, <i>sibilance</i> (see <b>Sibilant</b> below) is often a byproduct of overly bright tuning around the 5–8 kHz range. Consequently, bright headphones can be a double-edged sword: great for detail and excitement, problematic for comfort over long sessions.<br><br>There is also a distinction to be made between a headphone that is <i>bright-neutral</i> (i.e. generally balanced but with a slight treble tilt) and one that is <b>aggressively bright or treble-heavy</b>. The former might just be described as <i>\"airy and detailed,\"</i> whereas the latter might earn the label <i>\"treble cannon\"</i> and come with warnings about harshness.<br><br>The community sometimes debates these nuances. For instance, one person's \"bright and brilliant\" headphone might be another's \"piercing and painful\" experience, because <b>treble sensitivity</b> varies by individual.<br><br>In summary, calling a headphone <i>bright</i> highlights its emphasis on high-frequency clarity. It's often a compliment for detail and openness, but it can also be a caveat emptor for those who are treble-sensitive: <i>enjoy the clarity, but beware the potential for harshness</i>.<br><br>As a rule of thumb, <b>bright vs. dark</b> is one of the primary axes of sound signature description, and finding your comfort zone on that spectrum is a key part of selecting audio gear.",
    relatedTerms: ["Detailed", "Airy", "Sparkly", "Crisp"],
    oppositeTerms: ["Dark", "Warm", "Veiled"],
    tags: ["treble-emphasis", "clear", "vivid", "sharp"],
    technicalRange: "4kHz+",
  },
  {
    term: "Coherent",
    sentiment: 0.8,
    primaryCategory: "positive",
    subCategories: ["Presentation", "Realism"],
    summary:
      "Coherent sound means the audio is presented as a seamless, unified whole – all frequencies (and drivers) blend together naturally, without any part sounding disjointed or out-of-sync.",
    shortExplanation:
      "In the context of headphones and especially multi-driver IEMs, <i>coherence</i> refers to how well the different frequency ranges integrate. A coherent headphone reproduces bass, mids, and treble in a way that feels perfectly aligned in timing and tonality, as if the sound is coming from one single source.<br><br>If a setup has multiple drivers (for example, separate bass and treble drivers in an IEM), good coherence means you <b>can't \"hear\" the crossover</b> – the transition from one driver or frequency band to another is smooth and unnoticeable. The music sounds organic and <i>\"of a piece.\"</i><br><br>In contrast, poor coherence might make the bass region and treble region feel somewhat separated or cause certain notes to lag or stick out, breaking the illusion that you're hearing a real performance.",
    detailedDescription:
      "<i>Coherency</i> is a term that often comes up in discussions of <b>hybrid or multi-driver IEMs</b>. For example, consider an in-ear monitor with a dynamic driver for bass and balanced armature drivers for mids and highs.<br><br>If not tuned and engineered well, when a bass note and a midrange note occur together, you might perceive them as coming from different \"places\" or with slightly different character – the bass might feel a bit delayed or the timbre might differ between drivers. This yields an incoherent presentation.<br><br>A truly <i>coherent</i> IEM, on the other hand, makes all drivers sound in unison, so a drum hit (which has bass and treble components) feels like one coherent event.<br><br>Single-driver headphones or IEMs (like a single dynamic driver covering the whole spectrum) inherently avoid driver coherence issues, which is why they're often praised for coherence – there are no separate sources to misalign.<br><br>However, coherence also applies to frequency response and phase alignment: even a single-driver headphone can be incoherent if it has weird phase behavior or resonance issues that smear timing. But generally, in the headphone world, people use <i>coherent</i> to praise a product that just <i>sounds right</i> in terms of integration.<br><br>It's that quality where nothing draws attention to itself; no sudden peaks, dips, or delays – the sonic image is <i>holistic and convincing</i>.<br><br><b>Debates/Misconceptions:</b> Coherence can be subjective and sometimes tricky to quantify. Some argue that human ears aren't sensitive enough to driver timing differences in IEMs for it to matter, while others swear they can immediately tell when an IEM's drivers aren't cohesive.<br><br>Additionally, some extremely <i>\"technical\"</i> earphones might present a ton of detail but feel incoherent if, say, the treble is ultra-fast (BA driver) and the bass is slow (dynamic driver).<br><br>Enthusiasts often note that even if multi-driver setups can outperform single drivers in certain aspects (like lower distortion or extended frequency response), the single-driver's coherence has its own appeal – lending a natural ease to the sound. Brands invest in tech (like better crossover design or physically aligning drivers) to improve coherence in hybrids.<br><br>In summary, if a review calls a headphone or IEM <i>coherent</i>, that's a compliment to its natural, unified sound reproduction. It implies you can listen to complex music and everything sounds in sync – the presentation doesn't fall apart into separate pieces. It's particularly high praise in multi-way designs where achieving that unity is more challenging.",
    relatedTerms: ["Natural", "Seamless", "Integrated", "Unified"],
    oppositeTerms: ["Disjointed", "Incoherent"],
    tags: ["integration", "timing", "unified", "natural"],
    technicalRange: "Full spectrum",
  },
  {
    term: "Dark",
    sentiment: -0.2,
    primaryCategory: "neutral",
    subCategories: ["Treble Character", "Tonal Balance"],
    summary:
      "Dark sound means the treble is subdued or attenuated, often paired with stronger bass/lower mids – this makes the overall tone more mellow and less detailed in the highs.",
    shortExplanation:
      "A <i>dark</i> headphone is essentially the opposite of a bright one. It has an under-emphasis on the upper midrange and treble, which yields a tonal balance tilted toward the low end.<br><br>In practical terms, dark-sounding gear will make things like cymbals, violins, and vocal \"air\" sound softer or more distant. The upside is that dark signatures tend to be <i>smooth and non-fatiguing</i> – you're less likely to get harshness or sibilance.<br><br>The downside is that they <b>lack some clarity or \"shine\"</b> on the high notes, meaning fine details or a sense of openness might be diminished. A mildly dark tuning can be very pleasant for easy listening, but if it's too dark, music can come across as veiled or overly mellow.",
    detailedDescription:
      "The term <i>dark</i> often implies both a treble roll-off and sometimes a mid-bass elevation (though not always – one could have a flat bass and just recessed treble and still call it dark).<br><br>The effect is that the sound has a <b>warm, thick, or heavy</b> character with muted top-end details. Imagine listening to music in a room with the treble tone control turned down – the general feeling is relaxed, but you lose some definition.<br><br>Some classic headphones (like certain Sennheiser models or vintage tunes) are known for a dark signature, providing a fatigue-free experience that some love, especially for long sessions or treble-sensitive ears. When details in the music seem hidden or the sound lacks \"air,\" reviewers might use <i>dark</i> in a critical sense, noting that the headphone doesn't reveal as much high-frequency information.<br><br>It's important to differentiate <i>dark</i> from <i>warm</i>. Warm typically refers to boosted bass/mids (with possibly slightly reduced treble), giving a rich sound, whereas <i>dark</i> usually emphasizes that the treble is <b>pulled back significantly</b>, possibly even more so than a typical warm tuning, such that the fine details are noticeably soft.<br><br>In fact, if a headphone has <i>too much warmth (bass/mid-bass)</i> <b>and</b> <i>too little treble</i>, it might cross from \"warm and smooth\" into \"dark and veiled\" because the overemphasis on lower frequencies and lack of highs makes the sound less clear overall.<br><br>Many listeners actually enjoy a mildly dark sound because it's easy on the ears. For example, if you find bright headphones irritating, a dark-tilting set can allow you to listen longer without fatigue. Dark headphones often pair well with bright or modern recordings, taming their sharp edges.<br><br>On the other hand, if a recording is already on the warm/dark side, a dark headphone can make it <i>too</i> dull. Thus, synergy plays a role. Some enthusiasts might mod or EQ a dark headphone to extract a bit more treble, referring to lifting a \"veil\".<br><br>A common misconception is that <i>dark</i> always equals <i>bad</i>. That's not true – it's a flavor. There are high-end headphones known for a darkish tuning that many adore for their relaxing sound. The key is that while they might not be the last word in treble detail, they compensate with a very <i>natural, fatigue-free midrange</i> and bass.<br><br>In sum, describing sound as <i>dark</i> points to treble deficiency and a warmer tilt, yielding a smoother but less detailed presentation. It's great for some uses and people, but those who crave sparkling highs and micro-details might find dark gear underwhelming.",
    relatedTerms: ["Warm", "Smooth", "Laid-back"],
    oppositeTerms: ["Bright", "Airy", "Sparkly"],
    tags: ["treble-recessed", "mellow", "subdued", "thick"],
    technicalRange: "Reduced 4kHz+",
  },
  {
    term: "Detailed",
    sentiment: 0.9,
    primaryCategory: "positive",
    subCategories: ["Detail & Texture", "Presentation"],
    summary:
      "Detailed sound is one that reveals tiny nuances and fine information in the music clearly – you can easily hear subtle elements that might be missed on less resolving equipment.",
    shortExplanation:
      "When a headphone or IEM is described as <b>detailed</b>, it means it has excellent resolution. You'll notice things like slight finger movements on guitar strings, the texture of a bow on a violin, the breath of a singer between words, or faint background instruments, all presented distinctly rather than smeared together.<br><br>This comes from a combination of a well-extended, clear treble and fast driver response that brings out micro-detail. Detailed headphones often give the impression of <i>high clarity and focus</i>, making complex music more transparent.<br><br>However, sometimes a very detailed sound can also expose flaws in recordings (tape hiss, editing cuts) or become fatiguing if the detail is achieved by an overly bright tuning.",
    detailedDescription:
      "<i>Detail retrieval</i> (often just called resolution) is a hallmark of high-end audio. Audiophiles pursue gear that can <i>'lift the veil'</i> off recordings and unearth information that lesser gear blurs.<br><br>A headphone known for detail will make each instrument in a busy mix easier to follow, because it minimizes masking and distortion. Technically, detail can be related to factors like a flat frequency response through the mids/treble (so nothing important is recessed) and low distortion (so subtle cues aren't lost in noise). <b>Fast transient response</b> also plays a role: a driver that can start and stop quickly can articulate each note without smearing into the next, preserving detail.<br><br>Describing something as <i>detailed</i> is almost always praise. Words like <b>\"resolving,\" \"high-resolution,\" \"revealing,\" \"accurate,\" or \"transparent\"</b> often accompany this descriptor. For instance, a reviewer might say <i>\"these IEMs are extremely resolving – I could hear the singer's inhale and the slight quiver in their voice, details I never noticed before.\"</i> This is the kind of performance detail lovers seek.<br><br>On the flip side, detail can be a double-edged sword if taken too far. Some headphones artificially <b>emphasize treble</b> to <i>seem</i> more detailed (because our ears are very sensitive to subtle high-frequency info), but that can introduce harshness. So, the best detailed headphones manage to deliver loads of information <i>without sounding etched or piercing</i>.<br><br>This is why planar magnetic or electrostatic headphones, known for combining quick transients and relatively smooth treble, are often lauded as extremely detailed yet refined.<br><br><b>Debates:</b> One debate is <i>\"true detail vs. fake detail.\"</i> True detail means the gear genuinely has better resolving power (e.g., lower distortion, better transient response). \"Fake detail\" implies the gear is just brighter – giving an illusion of more detail by highlighting the high frequencies.<br><br>Experienced listeners often try to discern this: a headphone that is <b>bright but coarse</b> might reveal some things yet mask others, whereas a headphone that's detailed due to quality drivers will reveal everything <i>across the spectrum</i> (you hear low-level bass texture as well as treble nuances).<br><br>Another aspect is that extremely detailed sound isn't always <i>musical</i>. Some find that when they focus on every tiny sound, they lose the emotional forest for the trees. Others live for the analytical thrill of dissecting music.<br><br>In summary, calling a headphone <i>detailed</i> or <i>resolving</i> is highlighting one of its strengths – it paints the music in high definition. It's a trait often associated with top-tier and reference headphones. Just remember that detail should ideally come alongside a balanced tonality; the best gear is both detailed <b>and</b> natural, whereas some gear achieve detail at the expense of comfort.<br><br>If you're a newcomer, hearing a truly detailed headphone for the first time can be a revelatory experience, showing you new layers in your favorite songs.",
    relatedTerms: ["Resolving", "Transparent", "Revealing", "Analytical"],
    oppositeTerms: ["Veiled", "Muddy", "Blurry"],
    tags: ["resolution", "clarity", "micro-detail", "transparent"],
    technicalRange: "Full spectrum",
  },
  {
    term: "Fatiguing",
    sentiment: -0.8,
    primaryCategory: "negative",
    subCategories: ["Presentation", "Treble Character"],
    summary:
      "Fatiguing sound is audio that causes listener fatigue over time – it might be exciting or loud initially, but it quickly tires your ears or mind.",
    shortExplanation:
      "When someone says a headphone is <b>fatiguing</b>, they mean that it's not comfortable to listen to for long periods because something about the sound wears you down.<br><br>A common cause is <i>too much treble or upper midrange energy</i>, which can make music sound piercing or aggressive to the ear. After a short while, you might feel the urge to lower the volume, take off the headphones, or you might get a slight headache or ear strain.<br><br>Fatigue can also come from a booming bass that physically overwhelms, or just a general loudness and distortion that irritates. In contrast, <i>non-fatiguing</i> (or \"easy listening\") sound signatures are smooth, balanced, or warm – they let you listen for hours without discomfort. The term <i>listening fatigue</i> is often used in audio to describe this phenomenon.",
    detailedDescription:
      "Listener fatigue is a real and subjective effect. Technically, our ears are most sensitive to the 2–5 kHz range (roughly where human voices project and where many harsh sounds lie).<br><br>If a headphone overemphasizes these frequencies (<i>think of a very bright or shouty headphone</i>), it can cause quicker fatigue because our auditory system becomes stressed by the prolonged exposure to what it perceives as loud or sharp sounds. Even if it doesn't outright hurt, it's tiring – similar to how staring at a bright light can strain your eyes.<br><br>Fatiguing sound can manifest as a burning sensation in the ear, a headache, or just a feeling of <i>\"I need to turn this off for a bit.\"</i> Some Beyerdynamic and Grado models, for instance, are famous for their detail and brightness but are also cited as fatiguing by some listeners if used for too long at higher volumes.<br><br>It's not solely about treble either. <i>Loud volume</i> is fatiguing in general (regardless of tonal balance, high SPL will tire out ears). <i>Distortion</i> is another factor: if a headphone or amp is producing distortion, the subtle abrasive sound can cause fatigue. A very <i>forward/aggressive presentation</i> (where nothing in the music gives you a break) can also be mentally fatiguing.<br><br>Newcomers should understand that a headphone sounding impressive in a short demo (with a vivid, bright, super-detailed sound) might not be the one you want to use all day. This is why many seasoned audiophiles gravitate towards <i>balanced or slightly warm headphones for daily listening</i>, as they are easier on the ears. Conversely, for short, critical sessions, one might use the super-detailed but fatiguing set. It's about usage and preference.<br><br>There is occasionally debate around <i>what is fatiguing</i> because tolerance varies. One person might find a certain treble level intolerable while another is fine. Some adapt over time as well. But universally, <b>smooth = less fatiguing</b> and <b>harsh = more fatiguing</b>.<br><br>Terms like <b>\"non-fatiguing,\" \"easy on the ears,\" or \"forgiving\"</b> are used to describe gear that one can listen to indefinitely without feeling worn out.<br><br>In summary, calling a headphone <i>fatiguing</i> is a warning sign: it might do some things well (often it correlates with very <i>revealing</i> or <i>bright</i> gear), but you may not be able to relax with it. As a newcomer, pay attention to this descriptor – if you see many users saying a headphone is fatiguing and you know you dislike sharp highs, it's probably not the best choice for marathon listening sessions. Everyone has a different fatigue threshold, so it's a personal comfort metric in addition to pure sound quality.",
    relatedTerms: ["Harsh", "Sibilant", "Bright", "Aggressive"],
    oppositeTerms: ["Smooth", "Easy-listening", "Forgiving", "Non-fatiguing"],
    tags: ["tiring", "harsh", "uncomfortable", "strain"],
    technicalRange: "2-5kHz peak",
  },
  {
    term: "Fast",
    sentiment: 0.7,
    primaryCategory: "positive",
    subCategories: ["Dynamics & Speed", "Bass Character"],
    summary:
      "A fast sound means the headphones can respond very quickly to changes in the music – notes start and stop with agility and precision.",
    shortExplanation:
      "Describing a headphone or IEM as fast refers to its transient response – basically how well it handles sudden sounds and rapid sequences. Fast headphones reproduce a drum hit or a guitar pluck with immediate attack and very little overhang or lag. This makes complex or high-tempo music sound well-defined, as each note is clearly separated in time. For example, fast bass means the moment a bass drum kicks, you hear a tight thump and then silence, without an enduring boom. Fast treble means quick percussion like hi-hats sound crisp and don't blur together on rapid hits. The result is an overall tight, articulated presentation. Often, planar magnetic and electrostatic headphones or balanced armature IEMs are praised for their speed, whereas a slow device might be a poorly damped dynamic driver that struggles to keep up, causing a \"blurry\" or boomy quality.",
    detailedDescription:
      "<i>Speed</i> in audio is a bit metaphorical – it’s not like the music is playing faster, but rather the headphone’s diaphragm can accelerate and decelerate rapidly in accordance with the signal. Think of it like a car’s handling: a fast transient response is like a car that can take quick turns with no wobble, whereas a slow one is like a boat that’s a bit sluggish and overshoots the turn.<br><br>With a fast headphone, rapid drum rolls, complex double-bass patterns, or intricate electronic glitch effects all remain distinct and controlled. <b>Slow</b> headphones, by contrast, might make those same passages sound smeared together or dull, because the driver can’t “keep up” – it’s still moving from the last note when the next comes, so sounds overlap.<br><br>We often pair the term <i>fast</i> with descriptions of bass tightness and overall cleanliness. An extreme example: a bass note on a fast headphone hits hard and then immediately disappears, whereas on a slow headphone it might hit softer and then <i>linger or “ring”</i> a bit, adding unwelcome resonance. Speed is closely related to <b>clarity and detail</b> because when transients are rendered properly, details have their space. It’s also related to <b>coherence</b> and <b>timing</b> – a fast multi-driver system needs all drivers to respond quickly and together, otherwise it could sound incoherent.<br><br>Audiophiles sometimes debate how much “speed” is perceptible and what technical aspects contribute most (driver material, magnet strength, damping, etc.). Planar magnetic headphones are often cited as having very fast, tight bass compared to many dynamics – this is partly due to the thin, evenly driven diaphragm of planars which can start/stop quickly. Balanced armature IEM drivers likewise are tiny and nimble for treble. Dynamic drivers, depending on design, can be fast too (some coated or stiff diaphragms with strong motors are very snappy), but others with heavy cones or loose control can be slow.<br><br>The term <b>PRaT</b> (Pace, Rhythm and Timing) sometimes comes up, especially in British hi-fi circles, which encompasses the idea of speed and musical timing – if a setup has good PRaT, it engages you with its snappy, rhythmic drive. This concept can be controversial and subjective, but it’s related to why speed matters: a fast headphone can make music feel more <i>“toe-tapping”</i> because rhythms are clean and impactful. A slow system might make music drag or feel smeared, losing some of that rhythmic excitement.<br><br>In summary, calling a headphone <i>fast</i> is praising its transient handling. It’s that sensation when you play a busy track and every note is in its place and distinct. Newcomers might notice this when comparing headphones: one set might make a rapid drum fill sound like a clear series of individual hits, while another set makes it a more vague thunder. The fast one is simply tracking the input more accurately in time. Pair speed with good tuning and you get an incredibly engaging, precise listening experience. Too much speed (and damping) without warmth, however, can sometimes make a headphone sound a bit thin or lacking “weight,” so once again balance is key. But in general, <i>fast = good</i> in audiophile terms, indicating a high level of technical performance.",
    relatedTerms: ["Tight", "Punchy", "Articulate", "Clean"],
    oppositeTerms: ["Slow", "Sluggish", "Smeared", "Loose"],
    tags: ["transient", "agile", "quick", "precise"],
    technicalRange: "Full spectrum",
  },
  {
    term: "Forward",
    sentiment: 0.1,
    primaryCategory: "neutral",
    subCategories: ["Presentation", "Spatial"],
    summary:
      "Forward sound means the music (often vocals or lead instruments) is presented very close to you, almost in-your-face, as if the performers stepped up closer.",
    shortExplanation:
      "A forward-sounding headphone pushes certain elements – usually midrange frequencies like vocals, guitars, snares – toward the listener's forefront. The result is that the mix feels intimate and aggressive: vocals are right \"at the front of the stage\" and hard to ignore. This can make music feel more immediate and lively, as if you're sitting in the front row of a concert. Many people enjoy a slightly forward midrange for the energy it brings, especially with vocal-centric music. However, if taken to an extreme, a forward tuning can become shouty or aggressive, where the constant in-your-face sound becomes tiring and lacks depth.",
    detailedDescription:
      "<i>Forwardness</i> in audio is largely about frequency balance in the mids and presence region. For instance, a headphone with a bump around 1–2 kHz (upper midrange) will likely sound forward because that’s the range that makes vocals and some instruments really present. One with a boost around 3–6 kHz might make things even more aggressively forward (and potentially harsh). When you read that a headphone has “forward vocals” or a “forward midrange,” it means vocals sound closer relative to the rest of the mix – they’re not laid-back or recessed. This can be great for singers/songwriters, rock, or anything where you want the vocals prominent. It’s also beneficial in cases where a headphone might otherwise sound distant; adding forwardness brings excitement.<br><br>Community members sometimes equate <i>forward</i> with <i>intimate headstage</i>. If something is forward, the soundstage often feels closer and potentially narrower, because everything is pushed towards you (imagine performers standing right in front of your face versus a few meters away). This is why forward is the opposite of <b>laid-back</b> – you trade depth and relaxed presentation for engagement and impact.<br><br>A classic example: many Grado headphones are described as forward – they put electric guitars and vocals in your lap, giving rock music a lot of bite and excitement, though not much soundstage depth. In contrast, something like a Sennheiser HD6XX series is more laid-back (with vocals a bit more distant). Neither is “right” or “wrong” – it’s preference and genre synergy.<br><br><b>Shoutiness:</b> One risk of too forward a tuning is the “shouty” effect. <i>Shouty</i> means vocals (especially female vocals or higher-pitched voices) sound like the singer is shouting at you. Technically, this often comes from an overdone 3 kHz region. A little forwardness adds presence; too much and it feels like the music is yelling. Users often discuss this with certain IEM tunings (the so-called <i>upper midrange gain</i> to match Harman target can sound shouty to some ears). The term <b>“shouty”</b> is indeed a common subjective descriptor, defined basically as an overly loud, in-your-face midrange.<br><br>In moderation, <i>forward</i> sound can be very engaging – it grabs your attention. This is why some people describe forward headphones as <b>“fun” or “live-sounding,”</b> because it’s reminiscent of standing near the stage at a live show where the sound sources are physically close. The key downside is that over long listening, a strongly forward sound can be fatiguing (similar to how aggressive brightness is fatiguing) because your ears never get a rest; everything is constantly vying for your attention at the front.<br><br>When a reviewer mentions <i>forward</i> as a quality, they might also mention specific ranges: e.g., <i>“The headphone has a forward upper midrange, making vocals very immediate.”</i> If they like vocals, this is praise; if it’s overdone, they might caution that it’s shouty or fatiguing. Also note, <i>forward</i> doesn’t necessarily mean <i>bright</i> – you can have a forward midrange without a very bright treble (and vice versa). Forward mainly concerns the mids.<br><br>To sum up, a <i>forward</i> presentation makes the music feel <b>closer and more aggressive</b>, energizing the listening session. It’s great for engagement and detail, but can reduce the sense of layering/distance. As with all these descriptors, it’s a continuum – many headphones find a pleasant middle-ground, being mildly forward to keep you engaged but not so much as to become harsh. Knowing your own taste (do you like being “in the music’s face,” or do you prefer a laid-back seat?) will help you interpret this term when you see it in reviews.",
    relatedTerms: ["Intimate", "Aggressive", "Present", "Shouty"],
    oppositeTerms: ["Laid-back", "Recessed", "Distant"],
    tags: ["close", "intimate", "aggressive", "present"],
    technicalRange: "1-2kHz boost",
  },
  {
    term: "Harsh",
    sentiment: -0.9,
    primaryCategory: "negative",
    subCategories: ["Treble Character", "Presentation"],
    summary:
      "Harsh sound is abrasive, edgy, or uncomfortably intense – usually due to excessive peaks in the upper midrange or treble that make the audio rough and grating to the ear.",
    shortExplanation:
      "If someone calls a headphone harsh, it's generally a negative comment indicating that certain frequencies (often around 3 kHz – 6 kHz in the upper mids) are overemphasized and cause discomfort. This harshness might manifest as vocals or trumpets that glare and become strident, or cymbals that crash with a biting, metallic quality that's not smooth. A harsh sound can make you wince on sharp notes and often leads to quick listening fatigue. It's the opposite of descriptors like \"smooth\" or \"pleasant.\" Harshness is typically a sign of an imbalanced tuning or distortion that wasn't tamed, and audiophiles will either avoid harsh-sounding gear or try to EQ the offending frequencies down.",
    detailedDescription:
      "<i>Harshness</i> is one of those things you know when you hear it – it’s an unpleasant intensity.<br><br><b>Technically, it can come from:</b><ul><li><b>Frequency response issues:</b> e.g., a big spike in the frequency response in the presence region (4 kHz or so) or lower treble (6–8 kHz) can make certain sounds overly aggressive. For example, a 5 kHz peak might make the sound of a violin bow or a soprano vocal line painfully forward and cutting.</li><li><b>Distortion:</b> If a driver is pushed beyond its clean limits, it introduces harsh, non-musical artifacts. This often happens at high volumes or with poor amplification, and it adds a grainy, rough edge to the sound.</li><li><b>Poor recordings:</b> Sometimes harshness is in the track itself (e.g., some modern pop with boosted highs). But a forgiving headphone might smooth that over, whereas a harsh headphone will double down on it.</li></ul>The language people use: <i>“It sounds like nails on a chalkboard on some notes,” “the S’s are gritty,” “the guitar has a screech,”</i> etc. All point to harshness. Another related word is <b>“sibilant”</b> (covered separately), which is a specific kind of harshness on “S” sounds. Harsh is broader – it could be any instrument or frequency that’s too edgy.<br><br>A classic scenario: A bright headphone that isn’t well controlled can become harsh on certain songs. For instance, some early high-end IEMs had lots of treble energy that made them super detailed, but many listeners found them harsh on cymbals or female vocals because of resonances. In the headphone world, certain models notorious for a peak (say an 8kHz spike) might be described as harsh or <i>“spiky”</i>.<br><br>Listeners’ sensitivity varies; one person’s “detailed and exciting” can be another’s “harsh and unbearable.” So sometimes you’ll see debates: <i>“Headphone X has a great sparkle,” vs “Headphone X is piercingly harsh, I returned it.”</i> Both are valid personal takes. But if a consensus calls something harsh, likely it has objectively strong output in ranges that many find irritating.<br><br><b>Mitigation:</b> A harsh headphone can sometimes be helped with EQ (reducing the problematic frequency band) or with different pads/cables/amps (small changes can alter the tonal balance). Also, our ears adjust a bit over time – some owners acclimate to a slightly harsh headphone and it bothers them less after brain burn-in. However, truly harsh sound is usually a sign of a flaw in tuning or compatibility with your hearing, and many will simply choose a different, smoother-sounding product.<br><br>In review contexts, <i>harsh</i> is a clear criticism. It tells newcomers that the sound can offend the ears. If you’re treble-sensitive, you should be cautious of any gear described as harsh or even <i>potentially harsh at higher volumes</i>. Conversely, if no one mentions harshness, and instead they mention <i>smoothness</i>, that’s a good sign for long-term comfort.<br><br>In summary, <i>harsh</i> describes a rough, biting quality in sound that’s generally undesirable. It’s often due to a combination of too much treble and lack of refinement. A good setup strives to be <b>detailed but not harsh</b>, delivering clarity with a smooth hand. When harshness is present, it’s one of those things that can overshadow all the positive attributes, because our ears naturally focus on discomfort. Thus, it’s an important descriptor to heed.",
    relatedTerms: ["Sibilant", "Fatiguing", "Strident", "Piercing"],
    oppositeTerms: ["Smooth", "Pleasant", "Refined"],
    tags: ["abrasive", "grating", "unpleasant", "edgy"],
    technicalRange: "3-6kHz peak",
  },
  {
    term: "Imaging",
    sentiment: 0.8,
    primaryCategory: "positive",
    subCategories: ["Spatial", "Presentation"],
    summary:
      "Imaging is the ability of a headphone to place sounds in the stereo field with precision – good imaging means you can point to where each instrument or effect is coming from.",
    shortExplanation:
      "When a headphone has good imaging, listening to a well-produced track feels like you can visualize the band's layout: perhaps the vocalist is in the center, the guitar slightly to the left, the hi-hat far right, etc. The sounds are well separated and localized, rather than all clumping together. Imaging is about directional accuracy and the clarity of placement. For example, in games, a headphone with great imaging lets you pinpoint where a sound (like a footstep or gunshot) is coming from. In music, it lets each instrument occupy a distinct spot in the stereo panorama. Poor imaging, on the other hand, means instruments feel indistinct in position – everything might feel blobbed to left/right or just generally nebulous. It's a crucial aspect of how immersive and 3D a headphone can sound within its soundstage.",
    detailedDescription:
      "<i>Imaging</i> is the ability of a headphone to place sounds in the stereo field with precision – good imaging means you can point to where each instrument or effect is coming from (left, right, or even in-between), giving a realistic sense of location.<br><br>Imagine closing your eyes while listening – with top-notch imaging, you could almost “draw” a map of where each sound source lies in the virtual stage around you. Headphone imaging primarily deals with left-right placement (since standard headphones are two-channel). Some headphones also create a subtle sense of front-back differentiation, though true front/back imaging is tough without special processing. But within the left-right plane, you’ll hear terms like <b>“precise imaging,” “holographic imaging,”</b> or <b>“pinpoint imaging.”</b> These mean that not only can you tell left vs right, but you can discern various degrees between them (like something being halfway towards the left ear, etc.) with clarity.<br><br>Headphones differ widely in imaging performance. Several factors influence it: driver matching (imbalances can skew imaging), the acoustic design (open-back vs closed, earcup shape), and transient response (fast, clean transients can help define edges of sounds in space). Some famously well-imaging headphones include the Sennheiser HD800 series and many planar magnetics, which present a very clear stereo image. Conversely, some cheap or bass-heavy headphones might have a “blurry” image where it’s hard to separate where things are. Also, many IEMs have surprisingly good imaging in terms of lateral placement, sometimes better than headphones, due to how they interact with your ear canal and give consistent left-right cues.<br><br>It’s worth noting imaging is related to, but distinct from, <b>soundstage</b>. <i>Soundstage</i> (see its section) is the perceived size and expansiveness of the sound field (how wide/deep). <i>Imaging</i> is about accuracy and placement within whatever soundstage exists. So, a headphone can have a rather small soundstage but still image very precisely within that small stage (everything is close, but you can still point to positions). Alternatively, a headphone might have a wide stage but poor imaging, meaning sounds are far apart but kind of vague in exact direction. The ideal is both wide and precise.<br><br>In reviews, good imaging is often highlighted for benefiting <i>gaming and movies</i>, because it aids directional cues (footsteps, explosions, etc.). But it’s also musically important: in a complex orchestral piece, good imaging helps you differentiate the violins on the left from the violas just right-of-center, for instance.<br><br>Some niche terms related to imaging: <b>“three-blob imaging”</b> is a criticism where you only hear left, center, right with gaps in between (like some older or lesser headphones). That indicates mediocre imaging resolution. <b>“Instrument separation”</b> is also closely tied – if imaging is good, instruments are well separated spatially, not congested. If someone says a headphone has <i>imaging issues</i> or sounds <i>“blurred”</i>, it means the opposite – the placements aren’t clear.<br><br>Technically, because headphones lack crossfeed (each ear hears only its channel, unlike speakers where each ear hears both channels), the imaging in headphones can feel “inside your head” or panned hard. This is why some use <i>DSP or crossfeed</i> to simulate speaker-like imaging out-of-head. But comparing headphones to each other, we still see noticeable differences in how well they create a stable stereo image.<br><br>In short, <i>imaging</i> is a key part of spatial sound quality. It transforms stereo sound from just left/right sound into a <i>panorama</i> where each element sits in a spot. Great imaging can make listening more engaging and also helps in analytical listening (you can focus on one instrument more easily). If you see a headphone praised for imaging, expect a precise and possibly immersive listening experience. If criticized, the headphone might be more for those who care about other aspects (like tonality or comfort) over spatial precision.",
    relatedTerms: ["Soundstage", "Separation", "Localization", "Positioning"],
    oppositeTerms: ["Blurred", "Congested", "Diffuse"],
    tags: ["positioning", "accuracy", "stereo", "localization"],
    technicalRange: "Full spectrum",
  },
  {
    term: "Laid-Back",
    sentiment: 0.3,
    primaryCategory: "positive",
    subCategories: ["Presentation", "Tonal Balance"],
    summary:
      "Laid-back sound is relaxed, gentle, and somewhat distant – the opposite of 'in-your-face.' It often means certain frequencies are softened, giving the music a smooth, easygoing presentation.",
    shortExplanation:
      "A laid-back headphone will make it feel like you're sitting a few rows back from the stage rather than right up front. The sound has a bit of distance or recession to it, especially in the vocal and treble regions. This typically results from a tuning with recessed upper mids or rolled-off treble. The benefit is a very non-fatiguing, pleasant listen – nothing screams for attention or pierces your ears. On the flip side, laid-back gear might lack some excitement or immediacy; details can sound a touch subdued and the music might not have the same \"attack\" or liveliness as a more forward presentation. Many describe laid-back sound as \"smooth, mellow, and forgiving.\"",
    detailedDescription:
      "Imagine a live performance: if you’re in the front row, the sound is direct and intense (that would be <b>Forward</b>). If you move towards the middle of the venue, the sound is still clear but more relaxed – you hear the music without being overwhelmed by it. That’s akin to a laid-back signature. Nothing is <i>shouty</i> or harsh; the headphone likely has a dip in the presence region (2–5 kHz) and perhaps a softer treble overall, so that vocals and bright instruments sit slightly behind the rest of the mix instead of taking the spotlight.<br><br>Audiophiles often appreciate laid-back tunings for long listening sessions. For example, the classic Sennheiser HD650 is frequently called laid-back: it has smooth treble and a bit of a relaxed upper midrange, which makes it very easy on the ears and enjoyable over time, even if it doesn’t “pop” with detail at first. Laid-back doesn’t mean lacking detail per se; it’s more about <i>presentation</i>. A headphone can be detailed yet laid-back if it presents detail softly rather than shoving it at you.<br><br>Some terms related to laid-back: <b>“relaxed,” “mellow,” “smooth,” “easy-going.”</b> In the Headphonesty glossary, <i>Relaxed</i> is defined similarly – gentle treble compared to mids, resulting in non-fatiguing but not overly detailed sound. That’s essentially the definition of laid-back as well. It’s often about treble that’s not aggressive and mids that aren’t too forward. The bass might still be strong or not, that’s a separate axis. You can have a bassy and laid-back headphone (warm and smooth) or a neutral-bass but laid-back treble headphone (which would sound a bit thin but still gentle up top).<br><br><b>Misconceptions:</b> Some might think “laid-back” means “boring.” While it’s true that a highly laid-back headphone can sound a bit dull on first impression (nothing jumps out at you), many people grow to love the laid-back sound for its naturalness and lack of listening fatigue. It tends to work well with genres like jazz, chillout, or anything you want to <i>relax</i> to. For intense genres (like hard rock or metal), a laid-back headphone might remove some edge that’s actually desired for the full experience. So it comes down to synergy and taste.<br><br>There is also the term <b>“laid-back soundstage”</b> sometimes used – that can mean the soundstage depth is such that performers feel set back. But usually, <i>laid-back</i> refers more to frequency response and dynamics.<br><br>Importantly, laid-back <i>does not</i> mean the headphone lacks dynamics or cannot get loud; it’s more about tonality and presentation. It’s perfectly possible for a laid-back headphone to still punch hard in the bass (e.g., some planars with smooth treble but big bass).<br><br>In community forums, you might see someone say <i>“I prefer a laid-back sound – I’m treble-sensitive and I like to listen for hours.”</i> They are likely looking at headphones known for being smooth and reserved up top. If you are such a listener, descriptors like laid-back, warm, and smooth are your friends, whereas forward, bright, and analytical ones might be warnings.<br><br>In summary, <i>laid-back</i> is a friendly, easygoing sonic character. It trades some immediacy and sparkle for comfort and ease. Music on a laid-back headphone might not bowl you over at first with detail or energy, but it invites you to <i>unwind and enjoy</i> without strain. It’s often an attribute of gear tuned for listening pleasure rather than studio scrutiny.",
    relatedTerms: ["Relaxed", "Smooth", "Mellow", "Easy-going"],
    oppositeTerms: ["Forward", "Aggressive", "In-your-face"],
    tags: ["relaxed", "distant", "gentle", "smooth"],
    technicalRange: "2-5kHz dip",
  },
  {
    term: "Lush",
    sentiment: 0.9,
    primaryCategory: "positive",
    subCategories: ["Tonal Balance", "Presentation"],
    summary:
      "Lush sound is rich, full-bodied, and luxurious, often with a sweet and smooth midrange. It gives music a euphonic, flowing quality.",
    shortExplanation:
      "When audiophiles describe a headphone or amp as lush, they mean it produces a very satisfying, creamy sound, especially in the midrange (where voices and many instruments lie). A lush sound usually has plenty of mid-bass and mids, and possibly even-order harmonic distortion (like what tube amplifiers add) that creates a \"thick\" and musical timbre. The result is that music can feel romantic or organic – notes have a bit of weight and bloom to them. It's not about hyper-detail; it's about tone. A lush presentation can make vocals sound more emotive and strings more silky. However, if something is overly lush, it might be at the cost of speed or clarity – the extreme would be sounding overly thick or sluggish. But generally, lush is used positively to indicate a beautiful, immersive smoothness in sound that draws you in.",
    detailedDescription:
      "The term <i>lush</i> is often associated with gear that adds a bit of coloration that our ears find pleasurable. For instance, vacuum tube amplifiers often impart a lush quality: they introduce strong even-order harmonics (which are musically consonant) and often a bit of warmth. Headphonesty’s glossary notes lush sound often comes from even harmonics and is <i>“pleasing and warm sounding”</i>, typically with strong bass in the 100–300 Hz range. In other words, the lower mids and upper bass are elevated enough to give body to the music. This, combined with smooth highs, yields a <i>lush tonality</i>.<br><br>In a lush sound, you might notice that male and female vocals have a kind of golden richness, pianos sound full-bodied, and even normally thin instruments gain a bit of weight. It can also be described as <b>“liquid”</b> or <b>“fluid”</b> – the opposite of dry or analytical. <i>Lush</i> often comes up in discussions of headphones like certain ZMF models or classic Sennheisers with tube amps, which are beloved for their midrange lushness.<br><br>Listeners who prioritize <i>musicality and emotion</i> often seek a lush sound because it can make listening very enjoyable and fatigue-free. Jazz, vocal, acoustic, and classical lovers might enjoy lush presentations that make timbres beautiful and engaging. On the contrary, someone who wants utmost precision might find a lush sound <i>too colored</i> or <i>too thick</i>. There is sometimes a trade-off: the same quality that makes the sound lush (enhanced harmonics and bass bloom) can reduce the perception of separation and speed. The music may not hit as hard or as sharply – it <i>flows</i> instead. For many, that’s a worthwhile and even addictive trait.<br><br>In community terms, <i>lush</i> is nearly always a compliment. It’s saying the sound is <i>gorgeous</i> in some way. Newcomers should not confuse it with <i>muddy</i> or <i>boomy</i>; a well-done lush sound is warm and rich but still <i>clear enough</i>. Misuse of the term could happen if someone thinks lush just means lots of bass – it’s more about mids and harmonics.<br><br>There’s a bit of overlap with <i>warm</i> and <i>smooth</i> when describing lush. Lush usually implies both of those (warmth in the bass/mids and smoothness in treble) plus a kind of <i>romantic, euphonic bloom</i>. If a sound is warm but still kind of flat in presentation, you might not call it lush. Lush tends to mean it’s warm + enveloping + emotionally resonant.<br><br><b>Some debates:</b> Is lush sound “high fidelity”? Objectivists might say adding coloration (like tube warmth) is distortion, so it’s not true to the recording. Subjectivists respond that if it sounds more enjoyable and still close enough, why not – it’s <i>euphonic</i>. This boils down to preference. Lush gear often isn’t the most strictly accurate, but it can be what people love listening to the most.<br><br>In summary, describing audio as <i>lush</i> paints a picture of sonic luxury – rich tones, full textures, and a smooth, sweet delivery. It’s the chocolate fudge of sound signatures: maybe a bit rich for some, but oh-so-enjoyable for others. If you see a reviewer use “lush” about mids or vocals, expect a sound that will likely be very pleasing and captivating in a soulful way.",
    relatedTerms: ["Warm", "Musical", "Rich", "Euphonic"],
    oppositeTerms: ["Dry", "Analytical", "Thin", "Clinical"],
    tags: ["rich", "full", "creamy", "organic"],
    technicalRange: "100-300Hz boost",
  },
  {
    term: "Muddy",
    sentiment: -0.8,
    primaryCategory: "negative",
    subCategories: ["Bass Character", "Detail & Texture"],
    summary:
      "Muddy sound is unclear and ill-defined – the musical elements blur together without crisp separation, often due to excessive bass or poor transient response.",
    shortExplanation:
      "If a headphone is described as muddy, it means you're not hearing a clean, articulate rendition of the music. Typically, this muddiness comes from a bloated low end or lower midrange that masks detail – for instance, a big mid-bass hump can cover up vocal clarity, making vocals and instruments sound like they're swimming in murky water. The attack of notes might be slow and the decay too long, so sounds run into each other without distinct edges. Imagine multiple instruments playing but you can't easily distinguish them because the sound is congested and lacks definition. Muddiness is almost always a criticism, suggesting the tuning or driver quality is off. Audiophiles strive for clean, tight sound; muddy is the opposite (related terms: \"congested,\" \"bloated,\" \"smeared\").",
    detailedDescription:
      "<i>Muddy</i> sound is unclear and ill-defined – the musical elements blur together without crisp separation, often due to excessive bass or poor transient response, which makes the overall presentation vague or smeared.<br><br>A classic cause of muddiness is <b>excessive mid-bass</b> combined with a dip in the presence region (clarity region). For example, if 200 Hz is overly elevated and 4 kHz is recessed, you might get a thick sound lacking clarity – that can be described as muddy. Another cause is <b>slow transient response or decay</b>: Headphonesty defines muddy as often due to <i>slow transient response or decay, weak treble response, and/or excessive bass</i>. This paints a clear picture: the driver might not stop quickly, so notes linger (especially bass notes), overlapping with the next notes. With weak treble, the natural overtones that give definition are missing, and with too much bass, the low frequencies drown everything else. All that yields a “one big blob” kind of sound where precision is lost.<br><br>Think of mud in water – it makes what was clear now opaque. Similarly, <i>muddy audio</i> obscures detail and separation. For instance, in a muddy-sounding headphone, a complex drum and bass line can turn into a monotone throb; the individual drum kicks and bass guitar plucks meld into a single muddled roar. Vocals might sound muffled or distant as if covered by a blanket (closely related to <b>veiled</b>). Instrument separation diminishes, so in busy passages especially, it may become hard to tell what’s what.<br><br>Often, newcomers might not notice muddiness until they hear a <i>cleaner</i> headphone side-by-side. Then it becomes apparent how much detail was lost in the mud. So muddy is a comparative term too – if you upgrade from a boomy cheap set to a more neutral one, you might remark how the new one sounds clear whereas the old was muddy.<br><br><b>Instrument Separation & Congestion:</b> Muddy sound often coincides with <i>congestion</i>. When many instruments play together, a muddy headphone will sound congested – everything piles up. A headphone with good clarity will maintain separation so you can follow each instrument. So reviewers might say <i>“it gets muddy during complex passages,”</i> meaning the headphone can’t resolve the complexity, turning it to mush.<br><br><b>Opposites:</b> Words like <b>“clear, articulate, detailed, transparent”</b> are the antonyms of muddy. To fix muddiness, often you’d reduce bass bleed (via EQ or better damping) and/or increase treble presence (to add clarity).<br><br>It’s interesting that some very warm signatures can approach muddiness, but good tuning avoids it by controlling the bass. For example, a headphone can be warm (elevated bass, smooth treble) yet still not muddy if the bass is tight and mids are tuned carefully. Muddy implies a loss of fidelity due to that excess or poor control.<br><br>In community terms, calling something muddy is clearly saying it has <i>inferior clarity</i>. It’s not usually a matter of taste – it’s more about technical performance or poor tuning. A listener who likes a bass-heavy sound might tolerate a bit of muddiness for the fun, but usually, even bassheads prefer <i>“clean bass”</i> over muddy bass if possible.<br><br><b>Misconceptions:</b> Sometimes people might confuse <i>warm</i> and <i>muddy</i>. Warmth adds fullness but doesn’t have to be muddy if done right. Muddy specifically indicates a problem – details are being lost. Another confusion can be <i>reverb-heavy recordings sounding muddy</i> vs gear being muddy. One should isolate if it’s the track or the equipment.<br><br>In summary, <i>muddy</i> is a negative descriptor pointing to lack of clarity and precision. If you see it in a review, that’s a sign that the headphone might not satisfy if you value detail and separation. It often afflicts budget models, badly EQ’d setups, or those chasing too much bass without control. The best headphones manage to be full in sound without ever becoming muddy, keeping each note defined. As you progress in the hobby, you’ll likely become more sensitive to muddiness and appreciate gear that stays crisp even when the music gets busy.",
    relatedTerms: ["Congested", "Bloated", "Smeared", "Boomy"],
    oppositeTerms: ["Clear", "Articulate", "Detailed", "Transparent"],
    tags: ["unclear", "congested", "bloated", "smeared"],
    technicalRange: "200Hz excess",
  },
  {
    term: "Musical",
    sentiment: 0.8,
    primaryCategory: "positive",
    subCategories: ["Presentation", "Realism"],
    summary:
      "Musical sound refers to a presentation that prioritizes enjoyment and natural, pleasant tonality over raw analytical detail – it's the kind of sound that makes you tap your feet.",
    shortExplanation:
      "Describing a headphone as musical means it makes the music sound right and engaging in an emotionally satisfying way. A musical tuning might have a bit of warmth or smoothness, or just an overall coherent balance that invites long listening sessions for pleasure. It's less about scrutinizing every detail and more about enjoying the performance as a whole. People often use \"musical\" in contrast to \"analytical\" – where analytical gear might emphasize dissecting the sound, a musical piece of gear will have you forgetting the technicalities and just enjoying the song. Musical sound is typically natural, cohesive, and can be forgiving of recordings, making even mediocre tracks sound good.",
    detailedDescription:
      "<i>Musical</i> sound refers to a presentation that prioritizes enjoyment and natural, pleasant tonality over raw analytical detail – it’s the kind of sound that makes you tap your feet and get lost in the music, rather than dissecting it.<br><br>The term <i>musical</i> is admittedly a bit vague (after all, all sound is “musical” to some degree), but in audiophile-speak, it has a specific connotation. If someone says a DAC or headphone is musical, they mean it has a quality that connects you to the music emotionally. This often involves a combination of tonal balance and dynamics that just <i>feel right</i>. Headphonesty defines <i>Musical</i> as <i>“cohesive reproduction that sounds natural, realistic, and ‘right’ to the listener”</i> – essentially, it doesn’t draw attention to technical flaws, but rather serves the music in an enjoyable manner.<br><br>A musical sound often has:<ul><li><b>Good tonality:</b> Instruments sound like themselves (<i>natural timbre</i>). Nothing major sticks out as weird or off.</li><li><b>Smoothness where needed:</b> Not overly harsh or analytical; perhaps a slight roll-off in the extreme treble to avoid stridency, or a touch of warmth to give body.</li><li><b>Engaging dynamics:</b> It can convey rhythm and timing well (sometimes people say <i>PRaT</i> contributes to a musical sound), so that the music has life and toe-tap factor.</li><li><b>Cohesion:</b> The various frequencies blend well (related to coherence), so you aren’t distracted by any portion – you hear the song as one integrated piece.</li></ul>Think of <i>musical</i> gear as the one that makes you forget about the gear. You find yourself humming along or getting emotionally moved, rather than thinking “wow the detail on that hi-hat is great” (that latter mindset is analytical listening).<br><br>It’s common to see forum posts like: <i>“I know the XYZ headphones may not be the most resolving, but they’re so musical I keep coming back to them and just enjoying my music.”</i> This implies that technical performance (like extreme detail retrieval) might take a back seat to overall enjoyment with that headphone. And that’s okay – many audiophiles say at the end of the day, <i>enjoying music</i> is the goal, so they prefer a musical sound to a clinical one.<br><br><b>Misconceptions:</b> <i>Musical</i> doesn’t necessarily mean inaccurate. It’s often a subtly colored accuracy. Some very high-end gear is both extremely resolving and highly musical (it doesn’t have to be either-or at the TOTL end). But in mid-fi and lower, often you choose between more analytical vs more musical tunings. Musical gear might mask a bit of micro-detail or soften the treble, but it gives you a presentation that flatters the music. For example, a musical headphone might slightly downplay the harshness in a recording and give it more warmth, which is technically coloration but subjectively nicer to hear.<br><br>Another misconception could be that <i>musical = bass-heavy fun</i>. Not exactly; “fun” signatures (like a big V-shape) can be musical, but musical can also be fairly neutral as long as it engages you. It’s somewhat personal too – what one finds musical, another might find dull if they crave more excitement. Generally though, musical leans toward <i>smooth, coherent, maybe warm-ish, with good rhythm.</i> It tends to avoid extremes (not too bright, not too bass-light or analytical).<br><br><b>Related terms:</b> <i>Natural</i> is closely tied (sounding like real life), <i>Engaging</i>, <i>Toe-tapping</i>, <i>Enjoyable</i>, <i>Emotional</i>. Opposites: <i>Analytical, Clinical, Dry, Sterile</i> – those imply the sound may be technically sharp but not emotionally involving. Headphonesty lists <i>Musical</i> opposite to <i>Nasal</i> (which is a specific coloration), but more broadly, musical’s opposite is “sterile” or “unemotional.” AudioAdvisor’s glossary puts <i>clinical</i> as a term lacking warmth, implying the clinical vs musical dichotomy.<br><br>In summary, calling something <i>musical</i> is giving it praise for <i>intangibles</i>. It means the reviewer found themselves enjoying the music through that gear, possibly even more than they expected. It’s a somewhat holistic term – rather than isolating bass or treble, it’s saying the overall effect was pleasing. As a newcomer, if you aren’t chasing the absolute last bit of detail and prefer something that makes all your songs sound nice and gets your foot tapping, look for descriptors like <i>musical, warm, smooth</i> in impressions. Those often indicate a crowd-pleasing, enjoyable listen, which is arguably the whole point of the hobby.",
    relatedTerms: ["Natural", "Engaging", "Euphonic", "Enjoyable"],
    oppositeTerms: ["Analytical", "Clinical", "Sterile", "Dry"],
    tags: ["engaging", "natural", "emotional", "enjoyable"],
    technicalRange: "Full spectrum",
  },
  {
    term: "Neutral",
    sentiment: 0.5,
    primaryCategory: "neutral",
    subCategories: ["Tonal Balance", "Presentation"],
    summary:
      "Neutral sound means the headphone reproduces audio without significant emphasis or de-emphasis on any frequency range – it's a balanced, reference-like presentation.",
    shortExplanation:
      "A neutral headphone doesn't skew warm (bass) or bright (treble); instead, it aims for an even keel across bass, mids, and treble. Think of it as 'nothing sticks out'. Bass is present but not booming, mids are clear but not pushed, treble is detailed but not sharp – all roughly in correct proportion. This kind of tuning is often sought in studio monitors or reference headphones used for mixing, because the goal is accuracy. For listeners, neutral can sometimes be perceived as flat or boring if they're used to more colored sound signatures, but many audiophiles appreciate neutral gear for its honesty. Balanced and transparent are often used in describing a neutral sound. In practice, true neutrality is hard to achieve, and there's debate on what neutral sounds like (since ear shape and preferences vary), but generally if a reviewer says something is neutral, expect a very even, uncolored sound profile.",
    detailedDescription:
      "<i>Neutral</i> sound means the headphone reproduces audio without significant emphasis or de-emphasis on any frequency range – it’s a balanced, reference-like presentation intended to reflect the original recording as faithfully as possible.<br><br>The concept of neutrality is a cornerstone in audio. It’s an ideal where the headphone is a “straight wire with gain” – adding as little tonal coloration as possible. In frequency response terms, a neutral headphone would follow a target curve that yields perceived flat response to the listener (not literally flat measured raw, due to ear gain, but flat at eardrum perception).<br><br>In use, a neutral headphone should make a well-recorded song sound “correct” – bass in line with expectations, vocals neither too forward nor too distant, and treble clear but not exaggerated. If you play a bass-heavy track on a neutral headphone, you hear it as bass-heavy because the track is, not because the headphone is adding extra bass. Conversely, on a boomier headphone it might sound <i>too</i> bassy. Neutral gear strives to <i>show you the recording, warts and all</i>. This is valuable for producers or critical listeners who want to hear exactly what’s in the mix.<br><br>However, <b>neutral does not always equal enjoyable</b> to everyone. Some may find a perfectly neutral sound a bit lacking in character – this is why many consumer headphones are intentionally tuned with a slight smile (more bass and treble) to sound exciting, or a warm tilt to sound comforting. Neutral might initially strike a newcomer as thin if they come from bassy headphones, or as dull if they come from bright ones. But after adjusting, one can appreciate that nothing is being boosted artificially.<br><br>There’s often a reference to “reference sound” or “studio neutral.” Monitors like the Etymotic ER4 or Sennheiser HD600 series are often cited as neutral benchmarks (though each has small deviations). <i>Flat</i> is a synonym sometimes used (though flat can also refer to literally flat FR, which isn’t exactly how our ears hear neutral). AudioAdvisor defines neutral as <i>“audio without emphasis on a particular frequency”</i>, synonyms <i>balanced, dry</i>, antonyms <i>colored, expansive</i> (interesting they list expansive as opposite, implying some people find neutral soundstage less expansive possibly).<br><br><b>Debates:</b> What is neutral? The Harman curve researchers have an idea of what an average listener perceives as neutral (which actually includes a bass bump and a slightly relaxed treble for headphones). Some audiophiles prefer diffuse-field or other targets. Thus, one person’s “neutral” headphone might be another’s “a bit warm” or “a bit bright.” Generally, though, if multiple people call it neutral, it’s close to a consensus flat-ish tuning.<br><br>Some might say true neutrality is boring and they prefer a <i>little flavor</i>, whereas others champion neutral as the only way to hear truth in music. This is subjective territory. It also depends on usage: If you’re mixing audio, you likely want neutrality so your mix translates well to all systems. If you’re just enjoying, a slight deviation might be nice to suit your taste.<br><br><b>Colored</b> is the term often used for non-neutral (having a tonal color or bias). <i>Transparent</i> or <i>uncolored</i> means essentially neutral (though transparent also implies low distortion).<br><br>In reviews, when something is praised for neutrality, the reviewer usually means it doesn’t favor bass or treble; it’s often a compliment for accuracy. But sometimes they might also caution that neutral = not for bassheads, or might be perceived as lacking warmth or brightness compared to more colored options.<br><br>In summary, <i>neutral</i> is a key descriptor you’ll see a lot. If you seek faithful, honest playback, you hunt for neutral. If you find neutral too plain, you might lean toward gear described as warm, V-shaped, etc. But understanding neutrality is important because it’s a baseline: once you know what roughly neutral is, you can describe other gear as warm, bright relative to that baseline.<br><br>For a newcomer, experiencing a neutral headphone can be ear-opening, as you’ll start to differentiate what aspects of sound signature can change with different tunings. It’s like tasting pure broth before adding salt or spices – maybe not the most exciting by itself, but it lets you appreciate the core flavor.",
    relatedTerms: ["Balanced", "Transparent", "Reference", "Flat"],
    oppositeTerms: ["Colored", "V-shaped", "Warm", "Bright"],
    tags: ["balanced", "reference", "accurate", "uncolored"],
    technicalRange: "Flat response",
  },
  {
    term: "Punchy",
    sentiment: 0.7,
    primaryCategory: "positive",
    subCategories: ["Bass Character", "Dynamics & Speed"],
    summary:
      "Punchy sound refers to a quick, impactful quality in the mid-bass – each beat or note (like a kick drum hit) lands with a tight, snappy impact.",
    shortExplanation:
      "When bass is described as punchy, it means it has good slam in the mid-bass region (roughly 80–150 Hz) with excellent control and speed. For example, a punchy kick drum will hit hard and then stop quickly, giving a satisfying 'thump' that adds rhythm and drive to music. This is the kind of bass that makes you tap your foot – it provides the groove and impact without spilling over. Punchiness is often associated with upbeat genres; a punchy headphone makes rock, pop, or EDM more exciting because the rhythm section is so tight. In contrast, a headphone lacking punch may sound a bit lifeless or soft on drums, and one with too much boom will sound slow or overbearing rather than tight. So, punchy is generally a compliment, indicating a well-controlled yet dynamic bass response.",
    detailedDescription:
      "<i>Punchy</i> sound refers to a quick, impactful quality in the mid-bass – each beat or note (like a kick drum hit) lands with a tight, snappy impact.<br><br>The term <i>punch</i> in audio is quite literal: think of the sensation of a punch – it’s sudden, forceful, and then it’s gone. That’s how punchy bass behaves. Technically, punchiness comes from a combination of a small mid-bass emphasis and very <b>fast transient response</b>. The driver must respond to the leading edge of a bass note immediately (for the impact) and then stop (for the clean cutoff). If a headphone has a sluggish driver, the bass hits will feel blunted and the energy of the music suffers. If it has a fast driver but no mid-bass presence, it might feel tight but not impactful (this can happen with some flat or bass-light tunings – they’re clean but not punchy because there isn’t enough level in the punch region). The best punchy bass often is slightly elevated in that kick drum region but with excellent damping.<br><br>A classic example of punchy headphones are many dynamic driver sets known for “toe-tapping” quality, or some planars known for super-fast bass. If you listen to a track with strong kick drum patterns, a punchy headphone will give you that satisfying kick each time, and you might physically feel a small “thud” pressure. It adds a lot of excitement to rock drums, electronic beats, funk bass lines, etc.<br><br>Punchiness is distinct from <b>slam</b>, though they’re related (and people sometimes use them interchangeably). Generally, <i>punch</i> refers to mid-bass (the chesty thump of a kick), whereas <i>slam</i> often refers to deeper sub-bass impact (the kind that you feel as a wave of pressure, like a subwoofer or a massive EDM drop). Punch is quicker and centered a bit higher in frequency, slam is about the really low and physical stuff. We’ll cover slam next, but it’s useful to note that a headphone can be very punchy (great kick drum) but not have a lot of deep sub-bass slam, or vice versa. The ideal for bass lovers is both punchy <i>and</i> slamming.<br><br>Community descriptions: <i>“These headphones are super punchy – every drum hit is so satisfying,”</i> or <i>“I love the punchiness of the bass guitar notes, it’s very tight.”</i> If someone says <i>lack of punch</i> or <i>“sounds a bit soft in the bass,”</i> that’s indicating the opposite problem. Often open-back headphones can lose some punch compared to closed-backs because the bass can leak out (less air pressure for the punch), though many open-backs still achieve decent punch with good design.<br><br>AudioAdvisor’s glossary defines <i>Punchy</i> as <i>“Quick, boomy noise, mostly associated with drums and other percussive sounds,”</i> synonyms <i>snappy, crisp</i>, antonyms <i>muddy, muffled</i>. The inclusion of “boomy” in their definition is odd (we’d normally not want boomy), but they likely mean a quick burst of bass energy. Anyway, punchy definitely correlates with <i>snappy</i> and <i>tight</i>.<br><br>If a headphone is punchy, it often indicates it has <i>dynamic contrast</i> – the ability to go from quiet to loud quickly, producing a sense of <b>rhythm and attack</b>. That ties into the concept of PRaT (Pace, Rhythm and Timing). Many times, gear that is called <i>musical</i> (see above) is also punchy, because that rhythmic engagement is a big part of musical enjoyment.<br><br>In summary, describing bass (or the sound) as <i>punchy</i> is highlighting its <b>impactful quick hits</b> in the mid-bass. It’s a desirable trait for most listeners, making music energetic and lively. If you love tapping along to drums and bass lines, you’d look for “punchy bass” in reviews. If a headphone is <i>too punchy</i> (not common to complain about, but maybe if mids are overshadowed by mid-bass thwacks), one might say it’s a bit aggressive in the bass. But usually punchy is just right when balanced properly – giving you the drive of the music without the bloat. Combine <i>punchy</i> with <i>tight</i> and <i>fast</i> and you have a recipe for excellent bass performance.",
    relatedTerms: ["Tight", "Snappy", "Dynamic", "Impactful"],
    oppositeTerms: ["Soft", "Loose", "Muddy", "Slow"],
    tags: ["impact", "snappy", "tight", "dynamic"],
    technicalRange: "80-150Hz",
  },
  {
    term: "Sibilant",
    sentiment: -0.8,
    primaryCategory: "negative",
    subCategories: ["Treble Character", "Presentation"],
    summary:
      "Sibilant sound has an exaggerated, harsh emphasis on 's' and 'sh' sounds in vocals (and similar high-frequency noises like cymbal hiss), making those specific sounds come across as sharp, hissing, or piercing.",
    shortExplanation:
      "Sibilance is something you'll notice particularly on vocals: when a singer hits an \"S\" or \"T\" consonant, a sibilant headphone will make it sound overly bright or even cringe-inducing, like a sudden hiss or \"spike\" of sound. This typically happens if the headphone has a peak in the upper treble (commonly around 6–10 kHz) where these sibilant frequencies lie. For example, the \"ess\" in \"miss\" might sound like a mini steam leak. Sibilance is almost always unwanted – it's a sign that the treble is not well controlled. Some recordings themselves have sibilance, but a forgiving headphone will damp that, whereas a sibilant-prone headphone will make it worse. Audiophiles often test for sibilance with specific tracks (e.g., female vocals known to be on edge) to see if a headphone handles them smoothly or accentuates the issue.",
    detailedDescription:
      "<i>Sibilant</i> sound has an exaggerated, harsh emphasis on “s” and “sh” sounds in vocals (and similar high-frequency noises like cymbal hiss), making those specific sounds come across as sharp, hissing, or piercing.<br><br>Sibilance is something you’ll notice particularly on vocals: when a singer hits an “S” or “T” consonant, a sibilant headphone will make it sound overly bright or even <i>cringe-inducing</i>, like a sudden hiss or “spike” of sound. This typically happens if the headphone has a peak in the upper treble (commonly around 6–10 kHz) where these sibilant frequencies lie. For example, the “ess” in “miss” might sound like a mini steam leak. Sibilance is almost always unwanted – it’s a sign that the treble is not well controlled. Some recordings themselves have sibilance, but a forgiving headphone will damp that, whereas a sibilant-prone headphone will make it worse. Audiophiles often test for sibilance with specific tracks (e.g., female vocals known to be on edge) to see if a headphone handles them smoothly or accentuates the issue.<br><br><b>Detailed Description:</b> <i>Sibilance</i> comes from the Latin <i>sibilare</i>, to hiss – quite fitting. It’s a very specific kind of harshness narrowly focused on sibilant consonants. Many people are particularly sensitive to this because it directly affects vocals, and nothing pulls you out of enjoying a song like winching at every “s” the singer utters.<br><br>In technical terms, sibilance typically occurs in the <b>upper-treble region (around 4 kHz to 8 kHz)</b> which is where the energy of “S” sounds resides. A headphone with a peak in that zone will exaggerate sibilant content. If a headphone is described as sibilant, the reviewer has clearly noticed it making vocals or cymbals unpleasant in that manner. It could be mild or severe; sometimes people say “it’s borderline sibilant on some tracks” meaning just a bit hot on S sounds, versus “it’s a sibilance nightmare” meaning it makes many vocals piercing.<br><br>It’s worth noting that <i>not all bright headphones are sibilant.</i> A headphone can have lots of treble but, if tuned carefully, not spike exactly in those sibilance frequencies or could have a controlled, smooth treble rise. Sibilance often is a result of a narrow spike or resonance. Some IEMs, for example, have resonance peaks that cause sibilance even if the rest of the treble is okay. The <i>ear gain</i> region (around 3 kHz) plus poorly damped peaks in 5–7 kHz can be to blame.<br><br>When evaluating gear, people often mention sibilance if present because it’s a deal-breaker for many. It’s unpleasant and fatiguing. A headphone that is otherwise great but sibilant on vocals will see that flaw pointed out frequently. On the other hand, a headphone that <i>avoids</i> sibilance gets praise for being <i>smooth</i> or <i>forgiving</i>.<br><br><b>Misconceptions:</b> Sometimes a newbie might think any bright sound is sibilant, but sibilance specifically refers to those S and T sounds. If a headphone is bright but not making S’s hissy, it might not be sibilant per se. Also, the source matters: some recordings have sibilance inherently (due to microphone or production). A truly neutral headphone might reveal that sibilance (so you might think the headphone is sibilant, but it’s actually the track). However, generally when we call a headphone sibilant, we mean it’s exacerbating or introducing more sibilance than is natural.<br><br><b>Cures:</b> Using EQ to notch down the offending frequency can mitigate sibilance. Certain pads or filters can also tame a sibilant headphone. There are even “de-esser” plugins in studio work to reduce sibilance in recordings. In headphone design, damping materials are often used to smooth out treble peaks that cause sibilance.<br><br>Community example: The infamous Shure SE535 IEM (for some) had a reputation of sibilance for certain people, or the Beyerdynamic DT990 (bright peaks that could be sibilant). In contrast, something like the HD650 is often praised for <i>non-sibilant</i> smooth treble even on hot tracks.<br><br>In summary, calling a headphone <i>sibilant</i> is a warning that high-frequency consonants are harsh. If you see that and you’re sensitive to sharp treble, that product likely isn’t for you (unless you plan to EQ or mod it). Conversely, if multiple reviewers say “no sibilance at all, even on sibilant tracks – very smooth treble,” that’s a good sign for an easy listen. Sibilance is one of those flaws that’s pretty obvious once you know what to listen for – and once you hear it, you can’t un-hear it. Thus, manufacturers try to tune it out, but not all succeed if they’re chasing extreme detail. The best gear gives you the detail <i>without</i> crossing into sibilant territory.",
    relatedTerms: ["Harsh", "Sharp", "Piercing", "Hissy"],
    oppositeTerms: ["Smooth", "Non-sibilant", "Forgiving"],
    tags: ["hissing", "sharp", "s-sounds", "piercing"],
    technicalRange: "6-10kHz peak",
  },
  {
    term: "Slam",
    sentiment: 0.8,
    primaryCategory: "positive",
    subCategories: ["Bass Character", "Dynamics & Speed"],
    summary:
      "Slam refers to the visceral, sub-bass impact you feel from a headphone – the kind of low-frequency energy that delivers a physical sense of impact or weight with each bass hit.",
    shortExplanation:
      "Audiophiles use slam to describe the force and fullness of bass impact, especially in the lower frequencies (sub-bass and mid-bass). If a headphone \"slams hard,\" it means when the music calls for it – e.g., a deep electronic drop, a tom drum hit, a movie explosion – the headphone delivers a strong, satisfying thump that has both volume and physicality. It's the difference between hearing the bass and feeling its weight. Headphones with planar magnetic drivers sometimes are said to have less slam than dynamics, because dynamics can move more air for that punch. Conversely, some closed-back dynamics are known for great slam. Slam is generally a desirable trait for those who enjoy an energetic, lifelike reproduction of bass. However, excessive slam might come with too much bass elevation for some tastes.",
    detailedDescription:
      "<i>Slam</i> refers to the visceral, sub-bass impact you feel from a headphone – the kind of low-frequency energy that delivers a <b>physical sense of impact or weight</b> with each bass hit. When a headphone has good slam, bass drops and kick drums hit with authority and heft, almost like a punch to the chest (as much as headphones allow). It’s about <b>dynamic bass power</b> that you can nearly feel.<br><br>Audiophiles use <b>slam</b> to describe the force and fullness of bass impact, especially in the lower frequencies (sub-bass and mid-bass). If a headphone “slams hard,” it means when the music calls for it – e.g., a deep electronic drop, a tom drum hit, a movie explosion – the headphone delivers a strong, satisfying thump that has both volume and <i>physicality</i>. It’s the difference between hearing the bass and <i>feeling</i> its weight. Headphones with planar magnetic drivers sometimes are said to have less slam than dynamics, because dynamics can move more air for that punch. Conversely, some closed-back dynamics are known for great slam. Slam is generally a desirable trait for those who enjoy an energetic, lifelike reproduction of bass. However, excessive slam might come with too much bass elevation for some tastes.<br><br><b>Detailed Description:</b> The concept of <i>bass slam</i> in headphones is a bit metaphorical because headphones can’t literally hit your body with bass like a subwoofer. But some headphones manage to create a convincing thump that gives an illusion of physical impact. That’s slam – it’s when a kick drum on the recording almost makes you <i>jerk</i> from its punch, or when a bass guitar note starts and you get that pressure sense.<br><br>Slam encompasses both the <b>quantity</b> of bass and the <b>dynamic attack</b>. A headphone could have deep extension but if it doesn’t deliver it in a dynamic way, you might say it lacks slam (it has bass rumble but not slam). Typically, headphones known for slam have strong drivers that can move a lot of air quickly. Large-driver dynamics (like 50mm+ bio-cellulose etc.), or designs like Fostex/TR-X00 series, some planars like the Audeze LCD-2 (with EQ), etc., have reputations for good slam. Also, having a good seal (like a closed-back or a snug IEM) can increase perceived slam because it builds pressure.<br><br>One way to think of slam vs punch (as mentioned in <b>Punchy</b>): <i>Punch</i> often refers to mid-bass tight hits, whereas <i>slam</i> extends to the <b>sub-bass</b> region (below ~60 Hz) and gives a sense of mass and weight in the hit. For instance, the “wub” of a dubstep drop or the boom of a bass drum has slam when you feel its power and resonance, not just hear a tone. A headphone with true slam can be exhilarating for bass-heavy genres. With slam, drums sound more lifelike, and electronic music has that club-like impact.<br><br>However, <i>too much slam</i> or focusing on slam can sometimes correlate with a bass-heavy tuning. Some basshead headphones have a lot of slam but at the expense of neutrality. Enthusiasts often try to find the sweet spot: a headphone that slams <i>and</i> stays reasonably clean. If bass slam isn’t well-controlled, it can turn into boominess or bleed. But when done right, slam doesn’t necessarily mean muddy – it’s just impactful. Think of it as the dynamic driver flexing its muscles for a moment.<br><br>Debates: On forums, you might see people asking “Which headphone has the most slam?” It’s somewhat subjective, as our perception of slam can be influenced by fit and amplification too. A powerful amp can improve slam on planars by delivering more current for dynamic swings. Some claim planar magnetics lack “macrodynamic slam” compared to dynamics – they can be very fast and punchy but not as weighty. Others say that’s overstated or depends on the model. It remains a common discussion point.<br><br>Additionally, certain audio reviewers differentiate <i>macro-dynamics</i> (big volume swings, closely related to slam) and <i>micro-dynamics</i> (subtle volume variations). Slam is more about macro-dynamic punch.<br><br>To test slam, listeners might use tracks with sudden deep bass bursts. If the headphone makes them go “wow” with the force of those, it’s slamming.<br><br>In summary, calling a headphone <i>slammy</i> or saying it “hits like a truck” in the bass is pointing out its capability to deliver <b>impactful bass energy</b>. For newcomers, if you like feeling the beat and low-end, look for terms like <i>“hits hard,” “impactful bass,” “good slam”</i>. If you’re more into delicate or flat reproduction, heavy slam might not be your priority. But even if you don’t consider yourself a basshead, a certain level of slam often makes music sound more <i>alive</i>. It’s part of what gives headphones that <i>speaker-like</i> or <i>live-concert-like</i> feel on the low end. Just remember, slam should come with control – the best headphones slam when called for and then get out of the way, rather than always booming.",
    relatedTerms: ["Impact", "Weight", "Authority", "Power"],
    oppositeTerms: ["Weak", "Anemic", "Light", "Thin"],
    tags: ["impact", "sub-bass", "visceral", "powerful"],
    technicalRange: "20-60Hz",
  },
  {
    term: "Smooth",
    sentiment: 0.7,
    primaryCategory: "positive",
    subCategories: ["Presentation", "Treble Character"],
    summary:
      "Smooth sound is characterized by an even, forgiving response with no harsh peaks – everything flows gently without any grating or edgy elements.",
    shortExplanation:
      "When a headphone or IEM is called smooth, it means the frequency response is well-rounded and free of abrupt spikes or dips. High notes, for instance, are rendered without shrillness; the midrange is often velvety; even the bass, while present, doesn't have a sudden boomy quality. The transitions between frequencies are fluid. This typically makes the sound non-fatiguing and easy on the ears. Smooth gear is great for long listening sessions and tends to handle poor recordings well because it doesn't accentuate their flaws. The trade-off can be that a very smooth tuning might lack a bit of excitement or sparkle compared to more aggressive ones – some ultra-smooth headphones can sound a touch \"veiled\" or overly polite if they smooth out too much detail. But generally, smooth is considered a positive trait, indicating refinement.",
    detailedDescription:
      "<i>Smooth</i> sound is characterized by an even, forgiving response with no harsh peaks – everything flows gently without any grating or edgy elements. A smooth headphone tames potentially sharp frequencies, resulting in a relaxed and pleasant listen where no specific range (especially treble) jumps out and causes discomfort.<br><br>Smoothness in audio often comes from deliberate tuning choices: for example, slightly rolling off the upper treble, avoiding big resonance peaks, and perhaps a gentle midrange. It’s essentially the opposite of a <i>“peaky”</i> or <i>“harsh”</i> sound. A smooth frequency response line would appear relatively flat or mildly sloping, without jagged jumps.<br><br>One classic example: many Sennheiser models are known for a smooth sound – the treble is present but never jarring, so you can listen for hours. Tube amplifiers often impart smoothness by adding even-order harmonics and softening transients a tad, which people find pleasing.<br><br>Smooth does not mean lacking detail; it’s more about the <i>presentation</i> of detail. A smooth headphone can still be detailed, but it will present that detail in a laid-back manner rather than shoving it at you. You might hear everything, but nothing will poke or sizzle. It’s like the difference between tasting a well-blended soup versus biting on a raw chili – the soup could have complex flavor (detail) but it’s blended (smooth), whereas the chili is a sudden spike (a peak).<br><br>Listeners who hate sibilance, brightness or general harshness gravitate toward smooth signatures. Audiophile jargon might also call these <i>“buttery”</i>, <i>“creamy”</i>, or <i>“liquid”</i> sounding (particularly if combined with a lush midrange). <b>Liquid</b> in Headphonesty is defined as <i>smooth, integrated, coherent, not overly detailed</i> – very close to smooth’s meaning.<br><br>Smoothness also often implies <b>low distortion</b>. When distortion is low, sound tends to be perceived as cleaner and less harsh. Some high-end planar or electrostats are praised for being super smooth because even when they have a lot of treble, it’s distortion-free and thus not harsh.<br><br>On the downside, the term <i>smooth</i> can sometimes be used in a back-handed way to say something is a bit too gentle. For example, <i>“the treble is smooth, but maybe a bit too smooth as it lacks excitement/air.”</i> This is that trade-off: smooth vs sparkly. The smooth headphone will never offend, but the sparkly one might thrill you with cymbal shimmer (and also might hurt on bad tracks). It’s a balancing act.<br><br>Most reviewers consider <i>smooth frequency response</i> a virtue, because it generally means a product is well-tuned without glaring issues. It’s often paired with terms like <b>“refined,” “civilized,” or “polite.”</b> For instance, <i>“The XYZ has a smooth treble response – notes have a rounded, pleasant character with no grain or harshness.”</i> This is clearly positive, especially if you’re sensitive to treble.<br><br>Technically, you could measure smoothness by looking at a frequency response graph for peaks, or by looking at a cumulative spectral decay (which shows resonances – a smooth headphone would have quick, even decay with no ringing spikes).<br><br><b>In summary</b>, a <i>smooth</i> headphone is like a smooth road: no jolts or bumps (sonic surprises). It provides a comfortable ride through your music. It’s often the result of careful engineering to eliminate resonances and tame the driver’s natural breakup modes. Newcomers who are treble-sensitive or coming from harsh earphones will find a smooth-sounding headphone a relief – it allows focus on the music instead of on that one note that always makes you cringe. Just keep in mind, smooth should not mean <i>dull</i>. The best smooth tunings give you all the music, just without the rough edges. If a piece of gear is frequently described as smooth, it’s a good candidate for those who want a relaxing, long-term listen. Enjoyment will come from the melody and richness, not from edgy excitement – which could be exactly what you want, especially for long jams or when relaxing with music at the end of the day.",
    relatedTerms: ["Refined", "Pleasant", "Liquid", "Civilized"],
    oppositeTerms: ["Harsh", "Peaky", "Rough", "Grainy"],
    tags: ["refined", "pleasant", "even", "non-fatiguing"],
    technicalRange: "No peaks",
  },
  {
    term: "Soundstage",
    sentiment: 0.7,
    primaryCategory: "positive",
    subCategories: ["Spatial", "Presentation"],
    summary:
      "Soundstage is the perceived three-dimensional space and environment of sound in a recording – essentially, how wide, deep, and tall the audio presentation appears through the headphones.",
    shortExplanation:
      "Soundstage describes the size and spatial imaging of the sound: width (left-right span), depth (near-far layering), and sometimes height. In headphones, a good soundstage can make you imagine the performance in a room or hall – you might sense that the singer is in front, the strings are off to the far left, etc., with a certain distance between them. Some headphones have an open, expansive soundstage that creates an \"out of head\" listening experience (you forget the sound is coming from drivers next to your ears). Others have an intimate or narrow soundstage, where the music sounds like it's coming from inside your head or very close together. Neither is inherently good or bad – a jazz club might feel better intimate, an orchestral recording might benefit from a big stage – but typically audiophiles covet a well-proportioned, wide soundstage for the sense of immersion and realism it brings.",
    detailedDescription:
      "<i>Soundstage</i> is the perceived three-dimensional space and environment of sound in a recording – essentially, how wide, deep, and tall the audio presentation appears through the headphones. A headphone with a large soundstage makes it feel like the music is spread out around you (outside or around your head), whereas a small or narrow soundstage makes everything feel confined closer to the ears.<br><br>Soundstage describes <b>the size and spatial imaging of the sound</b>: width (left-right span), depth (near-far layering), and sometimes height. In headphones, a good soundstage can make you imagine the performance in a room or hall – you might sense that the singer is in front, the strings are off to the far left, etc., with a certain distance between them. Some headphones have an <i>open, expansive</i> soundstage that creates an “out of head” listening experience (you forget the sound is coming from drivers next to your ears). Others have an <i>intimate or narrow</i> soundstage, where the music sounds like it’s coming from inside your head or very close together. Neither is inherently good or bad – a jazz club might feel better intimate, an orchestral recording might benefit from a big stage – but typically audiophiles covet a well-proportioned, wide soundstage for the sense of immersion and realism it brings.<br><br><b>Detailed Description:</b> Soundstage is a bit of an illusion in headphones since, unlike speakers, headphones don’t project sound in front of you. Instead, our brain creates a virtual stage based on cues in the recording and the headphone’s acoustic properties. Several factors influence soundstage: the headphone’s design (open-back vs closed-back – open usually sounds wider), driver placement (angled drivers often increase stage), acoustic shaping (ear cup shape, damping), and how the headphone interacts with your outer ear (pinna).<br><br>A famous example: Sennheiser HD800/S are known for a very large soundstage for headphones – they sound “out of your head,” with instruments seemingly coming from well outside your ears for some recordings. On the other hand, something like a closed-back portable may have a small stage, sounding very much “in-head.” Many IEMs, being inside the ear canal, historically had limited soundstage, but newer IEM designs and tuning have improved this, some yielding surprising width and depth.<br><br><b>Width</b> refers to how far left and right the sound can go. Terms used: <b>“wide” vs “narrow”</b>. A wide soundstage means if a sound is panned hard left, it feels like it’s <i>far</i> to your left. Narrow means even hard-panned sounds feel closer to the center of your head.<br><br><b>Depth</b> refers to a sense of front-back distance. Some headphones layer sounds so you feel some are closer and some farther. With good depth, you might sense the vocalist in front and percussion behind, for instance. With poor depth, everything seems to happen on a flat plane at the same distance. Depth in headphones is trickier to get, but some headphones image with depth fairly well, often open ones with angled drivers. Crossfeed (a feature that blends a bit of left into right and vice versa) can also increase the illusion of front imaging.<br><br><b>Height</b> is less commonly discussed, as stereo doesn’t strongly encode height, but some listeners perceive a vertical component (sometimes related to frequency – e.g., treble might seem higher).<br><br>Soundstage is often described with metaphors: <i>“concert hall-like”</i> for very spacious ones, or <i>“in-the-head”</i> for very narrow. A <i>“3D”</i> or <i>“holographic”</i> sound often implies a combination of wide stage and precise imaging that gives a three-dimensional impression. This goes hand-in-hand with <b>imaging</b> (discussed above) – the stage is the canvas, imaging is how well-defined the positions on that canvas are.<br><br>A common desire among headphone enthusiasts is to get a speaker-like presentation from headphones – i.e., a big open soundstage. While true speaker imaging (with forward projection and outside-head localization) is hard to fully achieve, some headphones do a remarkable job expanding the stage. Others intentionally have intimate staging, which can be engaging for certain music (like a vocal whispering in your ear effect).<br><br><b>Misconceptions:</b> Bigger soundstage doesn’t always mean better in every case. If too large, sometimes music can sound diffuse or lacking center focus. Also, some confuse <i>soundstage</i> with <i>headphone type</i> – e.g., assuming all open-backs have huge stage and all closed are narrow. It’s generally true open-backs have advantage in stage, but there are closed-backs with decent soundstage and some open with moderate stage. The tuning also matters; an overly mid-forward headphone might image more in-head despite being open.<br><br>In reviews, you might see: <i>“Soundstage is wide with a good sense of space, instruments feel spread out and not congested,”</i> which is praise, especially for complex recordings. Or <i>“soundstage is a bit narrow/intimate – everything feels closer together,”</i> which could be either a criticism or just a characteristic mentioned for context.<br><br><b>Relation to Frequency Response:</b> Interestingly, frequency balance can affect perceived stage. A headphone with a dip in the 1–3 kHz region (presence region) often sounds more distant (thus larger stage) because less of that “in-your-face” frequency. Too much upper mid can collapse stage making things sound forward (shouty). Treble extension (“air” frequencies >10 kHz) also add a sense of space and openness. Hence, very dark headphones can sometimes sound closed-in, whereas bright (but smooth) ones can sound spacious (to a point; too bright and you get imaging problems due to peaks).<br><br><b>Testing Soundstage:</b> Binaural recordings (made with a dummy head and microphones in the ears) are great to test stage – a headphone with good stage and imaging will really place sounds around your head in binaural demos (like someone speaking moving around). Standard stereo music can also show stage in how well separated and spread the mix elements are.<br><br>In summary, <i>soundstage</i> is a key spatial quality that can make headphone listening more immersive and realistic. A wide, open soundstage can be breathtaking for live recordings or classical music, giving a sense of listening in a space. A narrower stage can be intense and focused, which might suit other genres or personal preferences. Many audiophiles list soundstage as one of the big differences between headphones – it’s part of what makes one headphone sound “bigger” or “smaller” than another beyond just frequency response. As a newcomer, pay attention to how different headphones image your favorite tracks; you’ll start to notice the sense of space (or lack thereof) and can decide what you enjoy more.",
    relatedTerms: ["Imaging", "Width", "Depth", "Spacious"],
    oppositeTerms: ["Narrow", "Congested", "In-head", "Closed-in"],
    tags: ["spatial", "3D", "width", "depth"],
    technicalRange: "Full spectrum",
  },
  {
    term: "Thin",
    sentiment: -0.6,
    primaryCategory: "negative",
    subCategories: ["Tonal Balance", "Bass Character"],
    summary:
      "Thin sound means the audio lacks body and warmth – it comes across as light, sometimes brittle or hollow, especially in the bass and lower mids.",
    shortExplanation:
      "When someone calls a headphone's sound thin, they usually mean there isn't enough low-end weight or midrange richness to give instruments and voices a sense of heft. For example, male vocals might sound a bit anemic or weak, and bass notes might be present but lacking impact or depth. This often results from a recessed bass/lower midrange (or an overall bass-shy tuning). The opposite of thin would be full-bodied or rich – where notes have density and warmth. Thin sound can make music feel less engaging and too skewed toward the treble or upper mids. It can also be described as lean or clinical in some cases. While a thin signature can sometimes highlight detail (no bass to mask things), it often isn't satisfying for many listeners because the music loses some foundational weight.",
    detailedDescription:
      "<i>Thin</i> sound means the audio lacks body and warmth – it comes across as light, sometimes brittle or hollow, especially in the bass and lower mids. A thin-sounding headphone might have clear highs but will feel deficient in fullness, making vocals and instruments sound more fragile or less robust than they should.<br><br>Thinness in sound is akin to an image that’s been de-saturated of color – you get the outline, but not the fill. Technically, a thin sound is usually one where frequencies below ~200 Hz are de-emphasized. This means the bass lacks volume, and the lower mids (which give body to voices, cello, tom drums, etc.) are weak. Such a tuning can result in a sound that’s all crispy treble and clear upper mids but without the “meat” in the lower tones.<br><br><b>Common causes:</b> Some neutral or bright-tilted headphones can sound thin if they err on the side of being too flat in bass or even rolled-off in bass. Also, some open-back headphones without seal can struggle to convey sub-bass, making them seem thin compared to closed options. If someone is used to a bassy headphone and moves to a flatter one, they may initially perceive it as thin. Also, cheap earbuds or on-ears that have no low-end extension often are described as thin/tinny.<br><br><b>Descriptors and Synonyms:</b> <i>Lean</i> is often used interchangeably with thin (lean bass meaning not enough fatness). <i>Tinny</i> usually implies thin with a bit of a metallic quality (like the sound from a tiny radio). <i>Hollow</i> suggests a scoop in mids – voices sound hollow when lower harmonics are missing. All these paint a similar picture: insufficient lower-frequency energy.<br><br>Headphones that are thin might also be described as <i>analytical</i> or <i>dry</i> if that’s the intended effect – for instance, some studio headphones sacrifice bass quantity for accuracy, which can come off as thin but precise. Whether that’s good or bad depends on usage. For pure listening pleasure, most people like at least some warmth; too thin and music can feel emotionally lacking or “all bones, no flesh.”<br><br>AudioAdvisor’s glossary says <i>Thin: Lacks fullness and may sound shallow. Synonyms: tinny, hollow. Antonym: rich.</i> That encapsulates it well.<br><br>A thin headphone, when listening to orchestral, might make cellos and basses almost disappear behind violins. In rock, guitars might sound snappy but not chunky, and drums might lack oomph. Pop and electronic might feel like it’s missing the bass line’s groove. For voice-centric content like podcasts, thinness can make voices sound less natural (real human voices have chest resonance which is around 100-300 Hz). So thin reproduction can make a person’s voice sound like it’s coming through a phone (limited bandwidth), which is less pleasant.<br><br>Some genres or use-cases could benefit from a slightly lean sound – maybe if you truly want no bass interference (like mastering a track and you have a separate sub-check system). But generally, for enjoyment, a <i>thin</i> sound is not often praised. Usually if a reviewer says “the sound is a bit thin” it’s a mild critique suggesting they’d prefer more low-end to balance it out.<br><br><b>Opposites:</b> <i>Full, Full-bodied, Rich, Warm, Meaty</i> etc. A <i>thin</i> sound is the opposite of a <i>full-bodied</i> sound where, for instance, a piano’s lower notes have satisfying resonance and weight.<br><br><b>Related to Volume and Power:</b> Sometimes thinness can also result if a headphone is underpowered (not getting enough current/voltage from the amp). Planar magnetics, for example, might sound weak in bass (thin) if not properly driven. Once amped well, they might fill out. So if you encounter thin sound, it’s worth ensuring it’s not a power issue or source issue (some sources have high output impedance which can thin out bass on certain headphones due to damping factor mismatch, etc.).<br><br>In summary, <i>thin</i> is generally a warning sign that the sound may lack bass or warmth. If you love clarity and don’t mind missing some low-end, you might not object to thinness; but if you like your music with a sense of richness and foundation, a thin headphone will likely disappoint. It’s one of those terms that directly correlates with tonal preference – everyone has a tolerance for how lean is too lean. The goal for many is neutrality (which includes enough bass to not be thin). Thus, truly thin tunings are often niche or considered flawed for general enjoyment. Newcomers switching from consumer bassy headphones to reference ones might note thinness until they adjust or pair with a slight bass EQ to taste.",
    relatedTerms: ["Lean", "Anemic", "Light", "Hollow"],
    oppositeTerms: ["Full-bodied", "Rich", "Warm", "Thick"],
    tags: ["lean", "lacking-bass", "hollow", "light"],
    technicalRange: "<200Hz deficient",
  },
  {
    term: "Timbre",
    sentiment: 0.8,
    primaryCategory: "positive",
    subCategories: ["Realism", "Detail & Texture"],
    summary:
      "Timbre is the tonal character or quality of a sound that allows us to distinguish different instruments or voices, even if they're playing the same note.",
    shortExplanation:
      "In audio, we often talk about a headphone having natural timbre or, conversely, unnatural timbre. Natural timbre means that the tone of instruments is true-to-life – the headphone accurately conveys the mix of fundamental tones and harmonics that give each instrument its identity. For instance, a guitar string has a certain warm resonance and metallic zing; if a headphone's timbre is off, that guitar might sound plasticky or hollow instead of woody and rich. Timbre is influenced by frequency response (especially how the headphone handles the complex overtones of instruments). Some driver types (like certain balanced armatures in IEMs) can have timbre issues, making acoustic instruments sound a bit \"fake\" or \"processed.\" When audiophiles praise a headphone's timbre, they're saying that instruments and voices sound believable – like they would in real life, without strange coloration.",
    detailedDescription:
      "<i>Timbre</i> (pronounced “TAM-ber”) is the tonal character or quality of a sound that allows us to distinguish different instruments or voices, even if they’re playing the same note. Good timbre in headphones means instruments and vocals sound natural and realistic – a piano sounds like a piano, a violin like a violin, with all their unique overtones and textures reproduced authentically.<br><br>In audio, we often talk about a headphone having <i>natural timbre</i> or, conversely, <i>unnatural timbre</i>. <b>Natural timbre</b> means that the tone of instruments is true-to-life – the headphone accurately conveys the mix of fundamental tones and harmonics that give each instrument its identity. For instance, a guitar string has a certain warm resonance and metallic zing; if a headphone’s timbre is off, that guitar might sound plasticky or hollow instead of woody and rich. Timbre is influenced by frequency response (especially how the headphone handles the complex overtones of instruments). Some driver types (like certain balanced armatures in IEMs) can have timbre issues, making acoustic instruments sound a bit “fake” or “processed.” When audiophiles praise a headphone’s timbre, they’re saying that instruments and voices sound <i>believable</i> – like they would in real life, without strange coloration.<br><br><b>Some common discussions around timbre in the audiophile world:</b><ul><li><b>Dynamic drivers vs Balanced Armature drivers:</b> Many listeners feel that dynamic drivers (the traditional speaker-like cones) often have more natural timbre, especially for things like drums, piano, vocals. Balanced armature drivers (common in multi-driver IEMs) can sometimes sound “BA timbre,” which is described as plasticky or nasally or unnaturally fast-decaying, causing instruments to not sound quite right. That’s not universally true, as some BA setups are tuned well, but it’s a trend often noted.</li><li><b>Planar magnetic timbre:</b> Planars generally have good timbre for many instruments, though some say very fast planars can make percussion sound a bit too tight (less resonance). Still, planars are often praised for realistic mids.</li><li><b>Electrostatic timbre:</b> These can be extremely detailed but sometimes accused of a slight artificialness in tone due to their ultra-clean nature – again, subjective and often great when tuned well.</li><li><b>Overtones and frequency response:</b> If a headphone has a spike or dip in a certain frequency that corresponds to harmonic overtones of instruments, it can skew timbre. For instance, if upper mids are scooped out, instruments might lack warmth or presence, sounding thin (affecting timbre). If there’s a strange peak in treble, instruments might sound steely or overly crisp in a non-natural way.</li></ul><br>One specific example: A common timbre test is the human voice – we all know what voices sound like. If a headphone makes voices sound boxy (like talking through a tube) or nasally or sibilant beyond the recording, that’s a timbral coloration. Headphonesty notes <i>Nasal</i> (around 600 Hz peak) as an unnatural timbre for vocals, and <i>Honky</i> or <i>Boxy</i> for other midrange colorations. Those terms describe types of timbre issues: <i>boxy</i> (like talking in a box, maybe too much 300-500 Hz), <i>honky</i> (like cupping your hands, too much 500-700 Hz). A headphone with flat mids likely avoids those, preserving timbre.<br><br>Good timbre is particularly important for acoustic genres – classical, jazz, folk – where you want instruments to sound like themselves. If a headphone has great detail but poor timbre, a violin might sound screechy or a trumpet might sound thin – very off-putting for purists. Conversely, a headphone might be not the most detailed but nails the timbre, making it very musically convincing.<br><br>Audiophiles sometimes rank headphones by timbral naturalness. For instance, the ZMF dynamic headphones are often lauded for timbre (they’re wood-enclosed and tuned for a richer tone), whereas some chi-fi multi-BA IEMs get dinged for timbre issues.<br><br><b>Debates:</b> Timbre can be subjective. Some might not notice minor timbre deviations unless they play an instrument and have that reference. Others immediately catch when a piano doesn’t quite have the right weight in the lower registers or when a drum’s decay is off. There’s also the question: how to measure timbre? It’s tough because it’s about complex harmonic relationships. Generally, a smooth, wide-band frequency response with even decay leads to good timbre (hence why many single dynamic driver IEMs, even if less detailed than BAs, are loved for sounding “right” – fewer crossover artifacts, coherent decay).<br><br>In summary, <i>timbre</i> is about authenticity of sound. If a reviewer says a headphone has <i>excellent timbre</i>, it means when you listen to your favorite singer or instrument, it should sound very natural and convincing, as if you’re in the room with that instrument. If they say <i>timbre is off</i> or <i>plasticky</i>, prepare for some instruments to sound a bit strange or “canned.” As a newcomer, you might not pinpoint timbre immediately, but it contributes greatly to whether you find the sound realistic or not. A good exercise is to listen to natural sounds (like acoustic instruments) on different headphones – you’ll start hearing which ones present them in a life-like way versus an odd coloration. Over time, one usually comes to value proper timbre highly, because it’s essential for long-term listening satisfaction and immersion in the music’s true tone.",
    relatedTerms: ["Natural", "Authentic", "Realistic", "Tone"],
    oppositeTerms: ["Plasticky", "Artificial", "Metallic", "Unnatural"],
    tags: ["tone", "authentic", "realistic", "natural"],
    technicalRange: "Harmonics",
  },
  {
    term: "Tight",
    sentiment: 0.8,
    primaryCategory: "positive",
    subCategories: ["Bass Character", "Dynamics & Speed"],
    summary:
      "Tight bass (or tight sound in general) means controlled, fast, and well-defined response – especially in the low frequencies.",
    shortExplanation:
      "When bass is described as tight, it implies the headphone has good damping and transient response: the bass doesn't spill or linger; instead, each kick drum or bass guitar pluck is concise and separated from the next. For example, in a rapid double-bass drum sequence, a tight headphone will articulate each beat clearly without them smearing into a single hum. Tightness often goes hand-in-hand with bass texture – you can hear fine details in the bass line because there isn't a muddy overhang. This is generally a highly desired trait, as it means you get the impact of bass without the muddiness. The opposite of tight is loose or boomy – where bass notes hang around too long or blur together. Tight sound can apply to other frequencies too (e.g., tight imaging or tight transients), but commonly it's used for bass control.",
    detailedDescription:
      "<i>Tight</i> bass (or tight sound in general) means controlled, fast, and well-defined response – especially in the low frequencies. A tight headphone produces bass notes that hit and then stop cleanly, with minimal excess boom or resonance, allowing each note to be easily distinguished.<br><br>A headphone’s <i>tightness</i> in bass is influenced by its driver speed, enclosure design, and damping. Good tight bass usually indicates:<ul><li><b>Fast driver response:</b> The driver can start and stop quickly (see <b>Fast</b> above), which prevents one note’s decay from overlapping into the next note’s attack.</li><li><b>Controlled resonance:</b> The headphone’s acoustic design (venting, damping materials) is such that it doesn’t have big resonant peaks at bass frequencies that would cause ringing or extended decay. Closed-back headphones, if not tuned well, can easily build up standing waves that cause boominess. Well-tuned ones add damping to avoid that, yielding tight bass even in closed designs.</li><li><b>Frequency response shape:</b> Often a tight bass impression comes from not overdoing the mid-bass. If there’s a huge mid-bass hump, even if technically the driver is fast, you’ll still perceive a bloom that can seem less tight. A flatter bass response (with maybe more sub-bass emphasis rather than mid-bass) can sound punchy and tight rather than boomy.</li></ul><br>Tight bass is really appreciated in genres like metal or fast electronica, where rapid bass sequences need clarity. If you have a headphone that is not tight, those genres can turn to one-note thuds and lose rhythmic precision. In contrast, a jazz upright bass on a tight headphone will let you hear each finger pluck and the stop of the string, whereas a less controlled one might blur those plucks into a more generic bass presence.<br><br><b>Community examples:</b> The term <i>“one-note bass”</i> is often used for headphones that lack tightness – meaning the bass sounds the same for different notes because it’s so bloomy and underdamped that it doesn’t articulate pitch well. Tight bass avoids one-note syndrome; you can follow the bass melody or drum pattern distinctly.<br><br>Headphonesty defines <i>Tight</i> as <i>“Easily distinguished and strong bass frequency reproduction, notable for quick transient response and control.”</i> (Opposite: Muddy). AudioAdvisor notes synonyms <i>clinical, precise</i> and antonyms <i>loose, boomy</i>. “Clinical” in that context means very controlled and perhaps a bit lean; indeed, sometimes very tight bass might be accompanied by less bass quantity (some might call it a bit lean but tight).<br><br>However, tight doesn’t have to mean lean – it’s possible to have <i>tight and powerful</i> bass if well executed (some planar headphones achieve strong, deep bass that’s still very tight, for example).<br><br>When someone says “the bass is tight,” it’s nearly always praise, unless they specifically miss some bloom (like someone might say “the bass is tight but I wish it had a bit more warmth” – indicating it’s controlled but maybe lighter than preference). Generally though, <i>tightness</i> is an objective quality whereas <i>warmth/amount</i> is a preference. The dream scenario is <i>“tight, punchy bass with good extension and sufficient quantity.”</i><br><br>Tight also contributes to overall clarity. Even outside the bass region, if bass is tight, it doesn’t mask the mids with excess energy. So the whole sound seems cleaner. Many times if you clean up a headphone’s bass via EQ or mods (removing boom), listeners describe the result as more tight and the mids/highs clearer.<br><br>In summary, <i>tight</i> is a very positive descriptor related to the quality of bass reproduction. Newcomers might notice tight vs loose bass as “does the beat sound articulate or kind of sloppy?” If you play a song with quick kicks and the headphone delivers each hit distinctly, congrats, that’s tight. If it kind of woofs and overlaps, that’s not tight. Tuning and driver tech both matter here. Once you hear an example of really tight bass, it’s a bit hard to go back, because you realize how much definition you were missing when it was looser.<br><br>As a side note, the term <i>PRaT</i> (Pace, Rhythm and Timing) often relates to this – gear with good PRaT tends to have tight, rhythmic bass that drives the music forward. So tightness can actually affect the subjective sense of how rhythmic/engaging the presentation is.<br><br>All in all, if a review calls a headphone’s bass <i>tight</i>, expect a clean, non-boomy low end where every thump is in its own lane, enhancing both technical clarity and musical enjoyment.",
    relatedTerms: ["Controlled", "Fast", "Clean", "Articulate"],
    oppositeTerms: ["Loose", "Boomy", "Muddy", "Slow"],
    tags: ["controlled", "precise", "clean", "articulate"],
    technicalRange: "Fast decay",
  },
  {
    term: "V-Shaped",
    sentiment: 0.0,
    primaryCategory: "neutral",
    subCategories: ["Tonal Balance", "Presentation"],
    summary:
      "V-shaped describes a sound signature where both the bass and treble are elevated while the midrange is comparatively recessed – like a 'V' when visualized on a frequency graph.",
    shortExplanation:
      "When a headphone or IEM is called V-shaped, expect a lively presentation: you'll get ample bass (often boosting the beats and rhythm) and pronounced treble (adding clarity and excitement), with the midrange (where vocals/guitars reside) dialed back a bit. This tuning can make music sound dynamic and engaging – think of the classic \"smile\" EQ curve many people apply. It works great for genres like rock, pop, EDM where thump and sparkle are desired. However, because the mids are recessed, vocals or lead instruments may sound more distant or less rich than on a flatter tuning. Some detail in the midrange can be lost or \"scooped out.\" V-shape is immensely popular in consumer audio because it tends to sound impressive and fun on first listen. But if overdone, it can lead to boomy bass and harsh treble. Balance is key: a mild V can be a nice crowd-pleaser; a strong V might be fatiguing.",
    detailedDescription:
      "<i>V-shaped</i> describes a sound signature where both the bass and treble are elevated while the midrange is comparatively recessed – like a “V” when visualized on a frequency graph. This signature gives strong, punchy bass and sparkling highs, but voices and mid-centric details sit slightly behind in the mix. It often results in an exciting, fun sound with <b>powerful lows and crisp highs</b>, at the expense of midrange prominence.<br><br>The term comes from the visual analogy: if you plot the headphone’s frequency response, bass is elevated (left side of the V), mids dip (the valley of the V), and treble rises (right side of the V). It doesn’t always literally look like a perfect V, but the concept holds. Often V-shaped tuning might mean, for example, +6 dB bass, -4 dB mids, +6 dB treble relative to a reference.<br><br><b>Characteristics of V-shaped sound:</b><ul><li><b>Bass:</b> Punchy, elevated. This gives music drive and warmth. Sub-bass (the rumble) is often present to give slam. Mid-bass gives punch. This makes the sound “fun” and engaging physically.</li><li><b>Treble:</b> Elevated in certain regions to bring out details and give a sense of air or sparkle. Hi-hats, synths, upper harmonics are more pronounced. This can make the sound seem clear and detailed at first, complementing the heavy bass by adding brightness.</li><li><b>Midrange:</b> Recessed relative to bass/treble. Vocals and instruments might take a step back. In a moderate V, they’ll still be clear, just not forward. In an extreme V, mids can sound distant or veiled behind the bass/treble.</li></ul>The overall impact is usually a “wow” factor for casual listening – you get powerful lows and crisp highs which often impress in demos.<br><br>Many mainstream headphones and car stereos historically have this kind of tuning because it tends to sound good to a lot of ears in short listening – bass and treble catch attention. Audiophiles sometimes sniff at heavy V-shapes as being unbalanced or non-neutral, but even in audiophile circles a <i>mild V</i> (or U shape) is often enjoyed as a “fun” tuning for certain music.<br><br><b>Related terms:</b> <i>U-shaped</i> is basically the same concept, sometimes implying a slightly less extreme mid scoop than a V (a broad dip rather than a sharp V). People often use U-shaped and V-shaped interchangeably. Some say U-shaped is when both bass and extreme treble are up but high mids might not be as elevated (so a bit smoother treble), whereas V often implies also a bit of a boost in presence treble. But there’s no strict rule; both mean recessed mids generally.<br><br>Headphonesty explains V-shaped succinctly: <i>“Referring to recessed midrange reproduction in relation to bass and treble. The vocal sounds appear to be sitting in the background behind the strong bass and energetic treble.”</i>. That captures it well: vocals in background, bass & treble in foreground.<br><br><b>Pros of V-shape:</b><ul><li>Exciting, engaging sound.</li><li>Great for low-volume listening (bass/treble boosts compensate for how our hearing is less sensitive to extremes at low volume – related to Fletcher-Munson curves).</li><li>Can make certain music (like electronic, hip-hop, modern pop) sound more impactful and sparkly than a flat tuning might.</li></ul><b>Cons:</b><ul><li>Midrange details (like the texture of a vocal or guitar nuances) can be masked or less audible.</li><li>Treble peaks can introduce sibilance or harshness if not careful.</li><li>Bass boost can overshadow clarity if it bleeds into mids or is too boomy.</li><li>Not ideal for those who want vocal prominence or neutral reference listening.</li></ul>Many IEMs and headphones in the consumer market aim for a tasteful V. For instance, a lot of popular models like some from Sony, V-Moda, mainstream Sennheisers, etc., lean that way. In enthusiast gear, some famous models like Fostex TH-X00 variants or certain FiiO/JVC IEMs are known for V or U shapes that people enjoy.<br><br>It’s worth noting that not all V-shapes are equal: A headphone might have a moderate bass lift and slight treble lift – that’s a mild V. Another might have huge bass and sharp treble – that’s an aggressive V. The listening experience differs vastly. So when reading reviews, context is key. If someone says “slight V-shape tuning,” expect a bit of fun factor but still fairly balanced. If “strong V-shape,” expect big bass, big treble, scooped mids.<br><br>Some listeners eventually drift from strong V shapes as they seek more mid detail or a more balanced sound for certain genres (like if you get into classical or vocal jazz, a heavy V might not satisfy because mids matter a lot there). But many keep a V-shaped set for those times they just want that <i>fun</i> kick.<br><br>In conclusion, calling a sound <i>V-shaped</i> is a quick way to communicate: “you’ll get plenty of bass and treble, with mids in the backseat.” It’s a cornerstone term in audio discussions. As a newcomer, if you find you love big bass and crisp highs, you likely enjoy a V-shaped signature. If you instead value vocals being front and center, you might not prefer V-shaped as much and might lean neutral or mid-forward. Knowing this term will help you read reviews and immediately understand the general tuning of the product.",
    relatedTerms: ["U-shaped", "Fun", "Exciting", "Consumer-friendly"],
    oppositeTerms: ["Neutral", "Mid-forward", "Flat", "Balanced"],
    tags: ["bass-boost", "treble-boost", "recessed-mids", "fun"],
    technicalRange: "Bass/treble boost",
  },
  {
    term: "Veiled",
    sentiment: -0.7,
    primaryCategory: "negative",
    subCategories: ["Treble Character", "Detail & Texture"],
    summary:
      "Veiled sound means it's as if there's a thin curtain or blanket over the music – details and clarity, especially in the high frequencies, are muffled or obscured.",
    shortExplanation:
      "When audiophiles say a headphone is veiled, they're pointing out a loss of detail and openness, often due to a roll-off in the treble or an overly warm tuning that clouds the sound. Imagine someone put a piece of cloth over your speakers – the sparkle in the highs and some clarity in the mids diminish. In a veiled presentation, vocals might sound like the singer is a step back behind a screen, and things like cymbals, strings, or breath sounds might be harder to discern or lack shine. This term became especially popular due to the so-called \"Sennheiser veil,\" referring to the smooth treble of some Sennheiser models that some felt reduced clarity. A bit of veil can make a headphone smoother and less fatiguing, but too much veil and the music can sound lifeless or congested. Opposites of veiled would be transparent, airy, or clear – where it feels like nothing is blocking the sound.",
    detailedDescription:
      "<i>Veiled</i> sound means it’s as if there’s a thin curtain or blanket over the music – details and clarity, especially in the high frequencies, are muffled or obscured. A veiled headphone lacks transparency; it can sound dull, muted, or distant, as though something is literally veiling the sound.<br><br>When audiophiles say a headphone is <b>veiled</b>, they’re pointing out a loss of detail and openness, often due to a roll-off in the treble or an overly warm tuning that clouds the sound. Imagine someone put a piece of cloth over your speakers – the sparkle in the highs and some clarity in the mids diminish. In a veiled presentation, vocals might sound like the singer is a step back behind a screen, and things like cymbals, strings, or breath sounds might be harder to discern or lack shine. This term became especially popular due to the so-called “Sennheiser veil,” referring to the smooth treble of some Sennheiser models that some felt reduced clarity. A bit of veil can make a headphone smoother and less fatiguing, but too much veil and the music can sound lifeless or congested. Opposites of veiled would be <b>transparent, airy, or clear</b> – where it feels like nothing is blocking the sound.<br><br><b>Detailed Description:</b> <i>Veil</i> is a metaphorical way to describe reduced high-frequency output or a lack of upper midrange energy. When the treble is rolled-off (i.e., reduced at higher frequencies) or if there’s a dip in the presence region (around 2–5 kHz), the result can be a smoother but less detailed sound. Listeners might say it’s as if fine details are <i>hidden behind a veil</i>. This can also be caused by distortion or resonance issues that blur detail. Headphonesty defines veiled as a <i>“loss of detail or transparency that sounds as though there is fabric in the way of the sound, often due to high-frequency roll-off or distortion.”</i>. That nails it: either the treble is curtailed or something (like distortion or driver issues) is masking the detail.<br><br><b>Common usages:</b><ul><li>The “Sennheiser veil” is a phrase from older audiophile discussions referring to the HD600/650 series, which have a gentle treble and very smooth mids. Fans call it natural; detractors call it veiled – meaning compared to brighter headphones, it might initially seem less crisp. Many actually like that sound as it’s easy to listen to, but if you A/B with a brighter headphone, the contrast can make the Senn sound veiled.</li><li>Other headphones can exhibit veil if poorly driven or with stock tuning that’s overly warm. For example, some thick-sounding closed headphones might be veiled if the pads or design eat treble.</li></ul><br><b>Impacts of veil:</b><br>A veiled headphone may have you turning up the volume to try to get more clarity, which ironically can be dangerous for hearing if you overcompensate. It might handle bad recordings well (since it doesn’t highlight hiss or harshness), but you could feel something’s missing with well-recorded tracks – like the shimmer of a ride cymbal or the texture of a violin string. Imaging might also suffer a bit, as high-frequency cues are important for precise location; a veil can blur those cues, making the soundstage less defined.<br><br><b>Fixes:</b> If a headphone is veiled, sometimes simple mods like removing a foam disk in front of the driver (which is literally a veil in some designs) can brighten it. EQ can add a bit of treble to cut through the veil. Or just adjusting to it – sometimes the ear/brain adjusts and what first seemed veiled later sounds just smooth.<br><br><b>Debates:</b> One person’s “veiled” can be another’s “smooth and natural.” There’s a fine line between a relaxed top-end and a veiled sound. Some argue that <i>extremely</i> clear headphones are actually artificially boosted in treble, so going back to a neutral or slightly dark headphone makes it seem veiled by comparison, even if it’s actually closer to natural. It’s subjective to an extent.<br><br>Also, veil can come from <b>physical factors</b>: old headphone pads that are worn can make a headphone sound more veiled because the driver is farther or alignment changes. New pads often restore brightness.<br><br><b>Examples:</b> If you read “the headphone has a slight veil over the mids/highs,” expect it to be gentle on detail – probably good for long listening, but not the most resolving or sparkly. If someone says “I removed the veil after amplifying/EQing,” they mean it became clearer.<br><br>Opposite scenario: A headphone described as <i>“removing a veil you didn’t know was there”</i> when you upgrade might illustrate how more treble or better clarity can feel like a veil lifted.<br><br>In summary, <i>veiled</i> is typically a criticism, meaning <i>not enough clarity or openness</i>. It conjures the image of music behind a gauzy curtain – you know it’s there and it’s pleasant, but you wish you could pull the curtain back to see/hear it fully. Some listeners are very allergic to any veil and prefer brighter, crisper tunings. Others prefer a slight veil to avoid brightness. Recognizing this term helps in parsing reviews: it’s a caution that the headphone may not be the last word in detail, and if you like lively treble and forward mids, a “veiled” headphone might disappoint you. Conversely, if you’re treble-sensitive, what someone calls veiled might actually sound just right to you. It’s all about perspective, but technically it points to subdued high-frequency output and detail.",
    relatedTerms: ["Muffled", "Dull", "Obscured", "Dark"],
    oppositeTerms: ["Transparent", "Airy", "Clear", "Open"],
    tags: ["muffled", "obscured", "dull", "lacking-detail"],
    technicalRange: "Treble roll-off",
  },
  {
    term: "Warm",
    sentiment: 0.6,
    primaryCategory: "positive",
    subCategories: ["Tonal Balance", "Bass Character"],
    summary:
      "Warm sound is characterized by a boost in the lower frequencies (bass and lower mids), giving the audio a rich, cozy, and smooth character.",
    shortExplanation:
      "When a headphone is described as warm, expect a generous amount of bass and mid-bass presence, adding thickness and warmth to notes. Vocals and instruments may have extra body – for example, male vocals might sound especially robust, and strings might have a golden hue. The treble on warm tunings is usually smooth or even dialed back a bit, meaning the sound avoids harsh edges. The overall feeling of warm sound is that it's comfortable and easy on the ears; cymbals and higher details won't jump out sharply, but the rhythm section (bass, drums) will feel ample. Warmth can be very pleasant for long listening or genres that benefit from a bit of bass bloom (like jazz, chillhop, some rock), but if overdone, it can venture into muddy or veiled territory where detail is obscured. Ideally, a warm headphone strikes a balance: added bass warmth and even-order harmonics that sweeten the sound, without completely smothering clarity.",
    detailedDescription:
      "<i>Warm</i> sound is characterized by a boost in the lower frequencies (bass and lower mids), giving the audio a rich, cozy, and smooth character.<br><br>Warmth in audio often comes from an elevated response roughly in the bass (say 50–200 Hz) and sometimes lower mids (200–500 Hz). This gives a sense of richness and fullness. Think of the sound of a tube amp or a vinyl record – often described as warm due to subtle harmonic distortion that adds body. In headphones, warm tuning might mimic that by slightly accentuating bass and not overemphasizing the analytical treble details.<br><br><b>Characteristics of warm sound:</b><ul><li><b>Bass:</b> There’s an obvious boost. It may not be extreme sub-bass rumble (though could include that), but certainly the mid-bass that adds thickness to most instruments is lifted. This can give music a more visceral foundation.</li><li><b>Mids:</b> Often warm headphones also have good mid presence, especially lower mids, making them lush. Vocals, especially deeper ones, benefit. Upper mids might be neutral or a bit relaxed to maintain smoothness.</li><li><b>Treble:</b> Usually rolled off or at least not emphasized. This prevents harshness and contributes to the easy-listening quality.</li></ul>The overall sound profile tends toward rich, full-bodied, and forgiving.<br><br>Warm headphones are often described as <i>musical</i> because they prioritize enjoyment over clinical accuracy. They can make even poorly recorded tracks sound pleasant by smoothing over rough edges and adding body where it might be lacking.<br><br>However, there’s a fine line between pleasantly warm and overly colored. <b>Too much warmth can lead to:</b><ul><li>Loss of detail in the mids/highs</li><li>Making the sound muddy or veiled</li><li>Reducing the sense of speed and attack</li></ul>The best warm headphones manage to add richness without sacrificing too much clarity.<br><br>Examples of warm-sounding gear often include tube amplifiers, certain Sennheiser models, and many closed-back headphones designed for consumer appeal. <i>Warm</i> is generally considered a positive descriptor, especially for those who find neutral or bright signatures fatiguing. It’s the audio equivalent of a cozy blanket – comforting and inviting for long listening sessions.",
    relatedTerms: ["Lush", "Rich", "Full-bodied", "Musical"],
    oppositeTerms: ["Bright", "Cold", "Thin", "Analytical"],
    tags: ["rich", "cozy", "full", "bass-emphasis"],
    technicalRange: "50-500Hz boost",
  },
];

let filteredTerms = [...termsData];
let currentFilter = "all";

function init() {
  renderTerms(termsData);
  setupEventListeners();
  createFrequencyChart();
  setupChartControls();
}

function renderTerms(terms) {
  const grid = document.getElementById("termsGrid");
  grid.innerHTML = "";
  terms.forEach((term) => {
    const card = createTermCard(term);
    grid.appendChild(card);
  });
}

function createTermCard(termData) {
  const card = document.createElement("div");
  card.className = `term-card ${termData.primaryCategory}`;
  card.onclick = (e) => {
    e.stopPropagation();
    if (card.classList.contains("expanded")) {
      openModal(termData);
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
            <span class="term-title">${termData.term}</span>
            <span class="sentiment-badge ${sentimentClass}"></span>
        </div>
        <p class="term-summary">${termData.summary}</p>
        <p class="term-short">${termData.shortExplanation}</p>
        <div class="term-tags">
            ${termData.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
        </div>
    `;
  return card;
}

function openModal(termData) {
  const modal = document.getElementById("termModal");
  document.getElementById("modalTitle").textContent = termData.term;
  const categoriesHtml = `
        <span class="modal-category ${termData.primaryCategory}">${termData.primaryCategory}</span>
        ${termData.subCategories
          .map((cat) => `<span class="modal-category">${cat}</span>`)
          .join("")}
    `;
  document.getElementById("modalCategories").innerHTML = categoriesHtml;
  document.getElementById("modalSummary").textContent = termData.summary;
  document.getElementById("modalShort").innerHTML = termData.shortExplanation;
  document.getElementById("modalDetailed").innerHTML = termData.detailedDescription;
  const relatedHtml = termData.relatedTerms
    .map(
      (term) =>
        `<span class="related-term" onclick="searchTerm('${term}')">${term}</span>`
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
  filterTerms();
}

function setupEventListeners() {
  document.getElementById("searchInput").addEventListener("input", filterTerms);
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      filterTerms();
    });
  });
  document.getElementById("termModal").addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function filterTerms() {
  const search = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  filteredTerms = termsData.filter((term) => {
    const matchesFilter =
      currentFilter === "all" || term.primaryCategory === currentFilter;
    const matchesSearch =
      term.term.toLowerCase().includes(search) ||
      term.summary.toLowerCase().includes(search) ||
      term.shortExplanation.toLowerCase().includes(search) ||
      term.detailedDescription.toLowerCase().includes(search) ||
      (term.tags &&
        term.tags.some((tag) => tag.toLowerCase().includes(search)));
    return matchesFilter && matchesSearch;
  });
  renderTerms(filteredTerms);
  createFrequencyChart(filteredTerms); // update chart with filtered terms
}

// Frequency relevancy data for audiophile terms
const frequencyMapping = {
  Airy: { frequency: 12000, relevance: 0.9 },
  Analytical: { frequency: 5000, relevance: 0.8 },
  Boomy: { frequency: 150, relevance: 0.9 },
  Bright: { frequency: 8000, relevance: 0.9 },
  Coherent: { frequency: 2000, relevance: 0.7 },
  Dark: { frequency: 3000, relevance: 0.8 },
  Detailed: { frequency: 4000, relevance: 0.8 },
  Fatiguing: { frequency: 6500, relevance: 0.9 },
  Fast: { frequency: 5000, relevance: 0.8 },
  Forward: { frequency: 2000, relevance: 0.9 },
  Harsh: { frequency: 7000, relevance: 0.9 },
  Imaging: { frequency: 8000, relevance: 0.7 },
  "Laid-Back": { frequency: 2500, relevance: 0.7 },
  Lush: { frequency: 800, relevance: 0.8 },
  Muddy: { frequency: 120, relevance: 0.9 },
  Musical: { frequency: 1500, relevance: 0.7 },
  Neutral: { frequency: 1000, relevance: 0.6 },
  Punchy: { frequency: 80, relevance: 0.9 },
  Sibilant: { frequency: 8500, relevance: 0.9 },
  Slam: { frequency: 40, relevance: 0.9 },
  Smooth: { frequency: 2000, relevance: 0.8 },
  Soundstage: { frequency: 10000, relevance: 0.7 },
  Thin: { frequency: 250, relevance: 0.8 },
  Timbre: { frequency: 1500, relevance: 0.8 },
  Tight: { frequency: 60, relevance: 0.9 },
  "V-Shaped": { frequency: 5000, relevance: 0.7 },
  Veiled: { frequency: 5000, relevance: 0.8 },
  Warm: { frequency: 500, relevance: 0.8 },
};

// Harman curve data points (simplified)
const harmanCurve = [
  { frequency: 20.0, db: 3.86 },
  { frequency: 20.2, db: 3.89 },
  { frequency: 20.4, db: 3.92 },
  { frequency: 20.61, db: 3.94 },
  { frequency: 20.81, db: 3.97 },
  { frequency: 21.02, db: 4.0 },
  { frequency: 21.23, db: 4.01 },
  { frequency: 21.44, db: 4.02 },
  { frequency: 21.66, db: 4.03 },
  { frequency: 21.87, db: 4.03 },
  { frequency: 22.09, db: 4.04 },
  { frequency: 22.31, db: 4.04 },
  { frequency: 22.54, db: 4.04 },
  { frequency: 22.76, db: 4.04 },
  { frequency: 22.99, db: 4.03 },
  { frequency: 23.22, db: 4.03 },
  { frequency: 23.45, db: 4.03 },
  { frequency: 23.69, db: 4.03 },
  { frequency: 23.92, db: 4.03 },
  { frequency: 24.16, db: 4.03 },
  { frequency: 24.4, db: 4.03 },
  { frequency: 24.65, db: 4.02 },
  { frequency: 24.89, db: 4.02 },
  { frequency: 25.14, db: 4.02 },
  { frequency: 25.39, db: 4.02 },
  { frequency: 25.65, db: 4.02 },
  { frequency: 25.91, db: 4.01 },
  { frequency: 26.16, db: 4.01 },
  { frequency: 26.43, db: 4.01 },
  { frequency: 26.69, db: 4.01 },
  { frequency: 26.96, db: 4.01 },
  { frequency: 27.23, db: 4.0 },
  { frequency: 27.5, db: 4.0 },
  { frequency: 27.77, db: 3.99 },
  { frequency: 28.05, db: 3.99 },
  { frequency: 28.33, db: 3.98 },
  { frequency: 28.62, db: 3.98 },
  { frequency: 28.9, db: 3.98 },
  { frequency: 29.19, db: 3.97 },
  { frequency: 29.48, db: 3.97 },
  { frequency: 29.78, db: 3.96 },
  { frequency: 30.08, db: 3.96 },
  { frequency: 30.38, db: 3.95 },
  { frequency: 30.68, db: 3.95 },
  { frequency: 30.99, db: 3.94 },
  { frequency: 31.3, db: 3.93 },
  { frequency: 31.61, db: 3.93 },
  { frequency: 31.93, db: 3.92 },
  { frequency: 32.24, db: 3.91 },
  { frequency: 32.57, db: 3.91 },
  { frequency: 32.89, db: 3.9 },
  { frequency: 33.22, db: 3.89 },
  { frequency: 33.55, db: 3.89 },
  { frequency: 33.89, db: 3.88 },
  { frequency: 34.23, db: 3.87 },
  { frequency: 34.57, db: 3.86 },
  { frequency: 34.92, db: 3.85 },
  { frequency: 35.27, db: 3.84 },
  { frequency: 35.62, db: 3.83 },
  { frequency: 35.97, db: 3.82 },
  { frequency: 36.33, db: 3.81 },
  { frequency: 36.7, db: 3.8 },
  { frequency: 37.06, db: 3.79 },
  { frequency: 37.43, db: 3.78 },
  { frequency: 37.81, db: 3.77 },
  { frequency: 38.19, db: 3.76 },
  { frequency: 38.57, db: 3.75 },
  { frequency: 38.95, db: 3.74 },
  { frequency: 39.34, db: 3.72 },
  { frequency: 39.74, db: 3.71 },
  { frequency: 40.14, db: 3.7 },
  { frequency: 40.54, db: 3.69 },
  { frequency: 40.94, db: 3.68 },
  { frequency: 41.35, db: 3.67 },
  { frequency: 41.76, db: 3.66 },
  { frequency: 42.18, db: 3.65 },
  { frequency: 42.6, db: 3.64 },
  { frequency: 43.03, db: 3.63 },
  { frequency: 43.46, db: 3.61 },
  { frequency: 43.9, db: 3.59 },
  { frequency: 44.33, db: 3.57 },
  { frequency: 44.78, db: 3.55 },
  { frequency: 45.23, db: 3.53 },
  { frequency: 45.68, db: 3.52 },
  { frequency: 46.13, db: 3.5 },
  { frequency: 46.6, db: 3.49 },
  { frequency: 47.06, db: 3.47 },
  { frequency: 47.53, db: 3.45 },
  { frequency: 48.01, db: 3.44 },
  { frequency: 48.49, db: 3.41 },
  { frequency: 48.97, db: 3.38 },
  { frequency: 49.46, db: 3.35 },
  { frequency: 49.96, db: 3.32 },
  { frequency: 50.46, db: 3.3 },
  { frequency: 50.96, db: 3.28 },
  { frequency: 51.47, db: 3.25 },
  { frequency: 51.99, db: 3.23 },
  { frequency: 52.51, db: 3.21 },
  { frequency: 53.03, db: 3.19 },
  { frequency: 53.56, db: 3.16 },
  { frequency: 54.1, db: 3.14 },
  { frequency: 54.64, db: 3.11 },
  { frequency: 55.18, db: 3.09 },
  { frequency: 55.74, db: 3.06 },
  { frequency: 56.29, db: 3.04 },
  { frequency: 56.86, db: 3.02 },
  { frequency: 57.42, db: 2.99 },
  { frequency: 58.0, db: 2.97 },
  { frequency: 58.58, db: 2.95 },
  { frequency: 59.16, db: 2.93 },
  { frequency: 59.76, db: 2.91 },
  { frequency: 60.35, db: 2.88 },
  { frequency: 60.96, db: 2.85 },
  { frequency: 61.57, db: 2.81 },
  { frequency: 62.18, db: 2.78 },
  { frequency: 62.8, db: 2.75 },
  { frequency: 63.43, db: 2.72 },
  { frequency: 64.07, db: 2.69 },
  { frequency: 64.71, db: 2.67 },
  { frequency: 65.35, db: 2.64 },
  { frequency: 66.01, db: 2.61 },
  { frequency: 66.67, db: 2.58 },
  { frequency: 67.33, db: 2.55 },
  { frequency: 68.01, db: 2.52 },
  { frequency: 68.69, db: 2.49 },
  { frequency: 69.37, db: 2.46 },
  { frequency: 70.07, db: 2.43 },
  { frequency: 70.77, db: 2.4 },
  { frequency: 71.48, db: 2.37 },
  { frequency: 72.19, db: 2.33 },
  { frequency: 72.91, db: 2.3 },
  { frequency: 73.64, db: 2.26 },
  { frequency: 74.38, db: 2.23 },
  { frequency: 75.12, db: 2.19 },
  { frequency: 75.87, db: 2.16 },
  { frequency: 76.63, db: 2.13 },
  { frequency: 77.4, db: 2.1 },
  { frequency: 78.17, db: 2.06 },
  { frequency: 78.95, db: 2.03 },
  { frequency: 79.74, db: 2.0 },
  { frequency: 80.54, db: 1.96 },
  { frequency: 81.35, db: 1.93 },
  { frequency: 82.16, db: 1.89 },
  { frequency: 82.98, db: 1.86 },
  { frequency: 83.81, db: 1.82 },
  { frequency: 84.65, db: 1.78 },
  { frequency: 85.5, db: 1.75 },
  { frequency: 86.35, db: 1.71 },
  { frequency: 87.22, db: 1.67 },
  { frequency: 88.09, db: 1.63 },
  { frequency: 88.97, db: 1.59 },
  { frequency: 89.86, db: 1.55 },
  { frequency: 90.76, db: 1.5 },
  { frequency: 91.66, db: 1.46 },
  { frequency: 92.58, db: 1.41 },
  { frequency: 93.51, db: 1.37 },
  { frequency: 94.44, db: 1.33 },
  { frequency: 95.39, db: 1.28 },
  { frequency: 96.34, db: 1.23 },
  { frequency: 97.3, db: 1.18 },
  { frequency: 98.28, db: 1.13 },
  { frequency: 99.26, db: 1.09 },
  { frequency: 100.25, db: 1.04 },
  { frequency: 101.25, db: 0.99 },
  { frequency: 102.27, db: 0.94 },
  { frequency: 103.29, db: 0.89 },
  { frequency: 104.32, db: 0.85 },
  { frequency: 105.37, db: 0.8 },
  { frequency: 106.42, db: 0.75 },
  { frequency: 107.48, db: 0.7 },
  { frequency: 108.56, db: 0.65 },
  { frequency: 109.64, db: 0.6 },
  { frequency: 110.74, db: 0.55 },
  { frequency: 111.85, db: 0.5 },
  { frequency: 112.97, db: 0.44 },
  { frequency: 114.1, db: 0.39 },
  { frequency: 115.24, db: 0.33 },
  { frequency: 116.39, db: 0.28 },
  { frequency: 117.55, db: 0.22 },
  { frequency: 118.73, db: 0.17 },
  { frequency: 119.92, db: 0.12 },
  { frequency: 121.12, db: 0.07 },
  { frequency: 122.33, db: 0.02 },
  { frequency: 123.55, db: -0.03 },
  { frequency: 124.79, db: -0.08 },
  { frequency: 126.03, db: -0.13 },
  { frequency: 127.29, db: -0.18 },
  { frequency: 128.57, db: -0.24 },
  { frequency: 129.85, db: -0.29 },
  { frequency: 131.15, db: -0.34 },
  { frequency: 132.46, db: -0.39 },
  { frequency: 133.79, db: -0.43 },
  { frequency: 135.12, db: -0.48 },
  { frequency: 136.48, db: -0.52 },
  { frequency: 137.84, db: -0.57 },
  { frequency: 139.22, db: -0.62 },
  { frequency: 140.61, db: -0.66 },
  { frequency: 142.02, db: -0.69 },
  { frequency: 143.44, db: -0.73 },
  { frequency: 144.87, db: -0.77 },
  { frequency: 146.32, db: -0.81 },
  { frequency: 147.78, db: -0.84 },
  { frequency: 149.26, db: -0.88 },
  { frequency: 150.75, db: -0.92 },
  { frequency: 152.26, db: -0.96 },
  { frequency: 153.78, db: -1.0 },
  { frequency: 155.32, db: -1.04 },
  { frequency: 156.88, db: -1.08 },
  { frequency: 158.44, db: -1.12 },
  { frequency: 160.03, db: -1.16 },
  { frequency: 161.63, db: -1.2 },
  { frequency: 163.24, db: -1.24 },
  { frequency: 164.88, db: -1.27 },
  { frequency: 166.53, db: -1.31 },
  { frequency: 168.19, db: -1.35 },
  { frequency: 169.87, db: -1.39 },
  { frequency: 171.57, db: -1.43 },
  { frequency: 173.29, db: -1.46 },
  { frequency: 175.02, db: -1.5 },
  { frequency: 176.77, db: -1.54 },
  { frequency: 178.54, db: -1.58 },
  { frequency: 180.32, db: -1.62 },
  { frequency: 182.13, db: -1.65 },
  { frequency: 183.95, db: -1.69 },
  { frequency: 185.79, db: -1.72 },
  { frequency: 187.65, db: -1.76 },
  { frequency: 189.52, db: -1.79 },
  { frequency: 191.42, db: -1.82 },
  { frequency: 193.33, db: -1.85 },
  { frequency: 195.27, db: -1.88 },
  { frequency: 197.22, db: -1.91 },
  { frequency: 199.19, db: -1.94 },
  { frequency: 201.18, db: -1.96 },
  { frequency: 203.19, db: -1.98 },
  { frequency: 205.23, db: -2.0 },
  { frequency: 207.28, db: -2.01 },
  { frequency: 209.35, db: -2.03 },
  { frequency: 211.44, db: -2.05 },
  { frequency: 213.56, db: -2.06 },
  { frequency: 215.69, db: -2.06 },
  { frequency: 217.85, db: -2.07 },
  { frequency: 220.03, db: -2.08 },
  { frequency: 222.23, db: -2.09 },
  { frequency: 224.45, db: -2.09 },
  { frequency: 226.7, db: -2.09 },
  { frequency: 228.96, db: -2.09 },
  { frequency: 231.25, db: -2.08 },
  { frequency: 233.57, db: -2.08 },
  { frequency: 235.9, db: -2.08 },
  { frequency: 238.26, db: -2.07 },
  { frequency: 240.64, db: -2.06 },
  { frequency: 243.05, db: -2.05 },
  { frequency: 245.48, db: -2.04 },
  { frequency: 247.93, db: -2.03 },
  { frequency: 250.41, db: -2.02 },
  { frequency: 252.92, db: -2.0 },
  { frequency: 255.45, db: -1.98 },
  { frequency: 258.0, db: -1.97 },
  { frequency: 260.58, db: -1.95 },
  { frequency: 263.19, db: -1.93 },
  { frequency: 265.82, db: -1.91 },
  { frequency: 268.48, db: -1.89 },
  { frequency: 271.16, db: -1.87 },
  { frequency: 273.87, db: -1.85 },
  { frequency: 276.61, db: -1.83 },
  { frequency: 279.38, db: -1.81 },
  { frequency: 282.17, db: -1.79 },
  { frequency: 284.99, db: -1.77 },
  { frequency: 287.84, db: -1.75 },
  { frequency: 290.72, db: -1.73 },
  { frequency: 293.63, db: -1.71 },
  { frequency: 296.57, db: -1.69 },
  { frequency: 299.53, db: -1.67 },
  { frequency: 302.53, db: -1.65 },
  { frequency: 305.55, db: -1.62 },
  { frequency: 308.61, db: -1.6 },
  { frequency: 311.69, db: -1.57 },
  { frequency: 314.81, db: -1.54 },
  { frequency: 317.96, db: -1.52 },
  { frequency: 321.14, db: -1.5 },
  { frequency: 324.35, db: -1.48 },
  { frequency: 327.59, db: -1.46 },
  { frequency: 330.87, db: -1.44 },
  { frequency: 334.18, db: -1.42 },
  { frequency: 337.52, db: -1.4 },
  { frequency: 340.9, db: -1.38 },
  { frequency: 344.3, db: -1.36 },
  { frequency: 347.75, db: -1.34 },
  { frequency: 351.23, db: -1.32 },
  { frequency: 354.74, db: -1.3 },
  { frequency: 358.28, db: -1.29 },
  { frequency: 361.87, db: -1.27 },
  { frequency: 365.49, db: -1.25 },
  { frequency: 369.14, db: -1.24 },
  { frequency: 372.83, db: -1.22 },
  { frequency: 376.56, db: -1.21 },
  { frequency: 380.33, db: -1.19 },
  { frequency: 384.13, db: -1.18 },
  { frequency: 387.97, db: -1.17 },
  { frequency: 391.85, db: -1.16 },
  { frequency: 395.77, db: -1.14 },
  { frequency: 399.73, db: -1.13 },
  { frequency: 403.72, db: -1.12 },
  { frequency: 407.76, db: -1.11 },
  { frequency: 411.84, db: -1.1 },
  { frequency: 415.96, db: -1.09 },
  { frequency: 420.12, db: -1.08 },
  { frequency: 424.32, db: -1.07 },
  { frequency: 428.56, db: -1.06 },
  { frequency: 432.85, db: -1.05 },
  { frequency: 437.18, db: -1.04 },
  { frequency: 441.55, db: -1.02 },
  { frequency: 445.96, db: -1.01 },
  { frequency: 450.42, db: -1.0 },
  { frequency: 454.93, db: -0.98 },
  { frequency: 459.48, db: -0.97 },
  { frequency: 464.07, db: -0.96 },
  { frequency: 468.71, db: -0.94 },
  { frequency: 473.4, db: -0.93 },
  { frequency: 478.13, db: -0.91 },
  { frequency: 482.91, db: -0.9 },
  { frequency: 487.74, db: -0.88 },
  { frequency: 492.62, db: -0.86 },
  { frequency: 497.55, db: -0.85 },
  { frequency: 502.52, db: -0.83 },
  { frequency: 507.55, db: -0.82 },
  { frequency: 512.62, db: -0.8 },
  { frequency: 517.75, db: -0.78 },
  { frequency: 522.93, db: -0.76 },
  { frequency: 528.16, db: -0.75 },
  { frequency: 533.44, db: -0.73 },
  { frequency: 538.77, db: -0.71 },
  { frequency: 544.16, db: -0.69 },
  { frequency: 549.6, db: -0.67 },
  { frequency: 555.1, db: -0.66 },
  { frequency: 560.65, db: -0.64 },
  { frequency: 566.25, db: -0.62 },
  { frequency: 571.92, db: -0.61 },
  { frequency: 577.64, db: -0.6 },
  { frequency: 583.41, db: -0.58 },
  { frequency: 589.25, db: -0.57 },
  { frequency: 595.14, db: -0.55 },
  { frequency: 601.09, db: -0.54 },
  { frequency: 607.1, db: -0.52 },
  { frequency: 613.17, db: -0.5 },
  { frequency: 619.3, db: -0.48 },
  { frequency: 625.5, db: -0.46 },
  { frequency: 631.75, db: -0.45 },
  { frequency: 638.07, db: -0.43 },
  { frequency: 644.45, db: -0.42 },
  { frequency: 650.89, db: -0.4 },
  { frequency: 657.4, db: -0.39 },
  { frequency: 663.98, db: -0.37 },
  { frequency: 670.62, db: -0.36 },
  { frequency: 677.32, db: -0.35 },
  { frequency: 684.1, db: -0.34 },
  { frequency: 690.94, db: -0.32 },
  { frequency: 697.85, db: -0.31 },
  { frequency: 704.83, db: -0.3 },
  { frequency: 711.87, db: -0.29 },
  { frequency: 718.99, db: -0.28 },
  { frequency: 726.18, db: -0.27 },
  { frequency: 733.44, db: -0.26 },
  { frequency: 740.78, db: -0.24 },
  { frequency: 748.19, db: -0.23 },
  { frequency: 755.67, db: -0.23 },
  { frequency: 763.23, db: -0.22 },
  { frequency: 770.86, db: -0.21 },
  { frequency: 778.57, db: -0.2 },
  { frequency: 786.35, db: -0.19 },
  { frequency: 794.22, db: -0.19 },
  { frequency: 802.16, db: -0.18 },
  { frequency: 810.18, db: -0.17 },
  { frequency: 818.28, db: -0.17 },
  { frequency: 826.46, db: -0.16 },
  { frequency: 834.73, db: -0.16 },
  { frequency: 843.08, db: -0.15 },
  { frequency: 851.51, db: -0.15 },
  { frequency: 860.02, db: -0.14 },
  { frequency: 868.62, db: -0.14 },
  { frequency: 877.31, db: -0.13 },
  { frequency: 886.08, db: -0.12 },
  { frequency: 894.94, db: -0.11 },
  { frequency: 903.89, db: -0.11 },
  { frequency: 912.93, db: -0.1 },
  { frequency: 922.06, db: -0.09 },
  { frequency: 931.28, db: -0.09 },
  { frequency: 940.59, db: -0.08 },
  { frequency: 950.0, db: -0.07 },
  { frequency: 959.5, db: -0.06 },
  { frequency: 969.09, db: -0.04 },
  { frequency: 978.78, db: -0.03 },
  { frequency: 988.57, db: -0.02 },
  { frequency: 998.46, db: -0.0 },
  { frequency: 1008.44, db: 0.02 },
  { frequency: 1018.53, db: 0.04 },
  { frequency: 1028.71, db: 0.06 },
  { frequency: 1039.0, db: 0.08 },
  { frequency: 1049.39, db: 0.1 },
  { frequency: 1059.88, db: 0.12 },
  { frequency: 1070.48, db: 0.15 },
  { frequency: 1081.19, db: 0.18 },
  { frequency: 1092.0, db: 0.21 },
  { frequency: 1102.92, db: 0.24 },
  { frequency: 1113.95, db: 0.27 },
  { frequency: 1125.09, db: 0.31 },
  { frequency: 1136.34, db: 0.35 },
  { frequency: 1147.7, db: 0.4 },
  { frequency: 1159.18, db: 0.44 },
  { frequency: 1170.77, db: 0.48 },
  { frequency: 1182.48, db: 0.53 },
  { frequency: 1194.3, db: 0.58 },
  { frequency: 1206.25, db: 0.63 },
  { frequency: 1218.31, db: 0.69 },
  { frequency: 1230.49, db: 0.74 },
  { frequency: 1242.8, db: 0.79 },
  { frequency: 1255.22, db: 0.85 },
  { frequency: 1267.78, db: 0.91 },
  { frequency: 1280.45, db: 0.97 },
  { frequency: 1293.26, db: 1.04 },
  { frequency: 1306.19, db: 1.1 },
  { frequency: 1319.25, db: 1.17 },
  { frequency: 1332.45, db: 1.24 },
  { frequency: 1345.77, db: 1.31 },
  { frequency: 1359.23, db: 1.38 },
  { frequency: 1372.82, db: 1.46 },
  { frequency: 1386.55, db: 1.53 },
  { frequency: 1400.41, db: 1.6 },
  { frequency: 1414.42, db: 1.67 },
  { frequency: 1428.56, db: 1.75 },
  { frequency: 1442.85, db: 1.82 },
  { frequency: 1457.28, db: 1.89 },
  { frequency: 1471.85, db: 1.96 },
  { frequency: 1486.57, db: 2.03 },
  { frequency: 1501.43, db: 2.11 },
  { frequency: 1516.45, db: 2.2 },
  { frequency: 1531.61, db: 2.28 },
  { frequency: 1546.93, db: 2.37 },
  { frequency: 1562.4, db: 2.46 },
  { frequency: 1578.02, db: 2.55 },
  { frequency: 1593.8, db: 2.63 },
  { frequency: 1609.74, db: 2.73 },
  { frequency: 1625.84, db: 2.83 },
  { frequency: 1642.1, db: 2.93 },
  { frequency: 1658.52, db: 3.04 },
  { frequency: 1675.1, db: 3.14 },
  { frequency: 1691.85, db: 3.24 },
  { frequency: 1708.77, db: 3.35 },
  { frequency: 1725.86, db: 3.46 },
  { frequency: 1743.12, db: 3.58 },
  { frequency: 1760.55, db: 3.69 },
  { frequency: 1778.15, db: 3.81 },
  { frequency: 1795.94, db: 3.92 },
  { frequency: 1813.9, db: 4.04 },
  { frequency: 1832.03, db: 4.16 },
  { frequency: 1850.36, db: 4.29 },
  { frequency: 1868.86, db: 4.41 },
  { frequency: 1887.55, db: 4.53 },
  { frequency: 1906.42, db: 4.65 },
  { frequency: 1925.49, db: 4.78 },
  { frequency: 1944.74, db: 4.91 },
  { frequency: 1964.19, db: 5.04 },
  { frequency: 1983.83, db: 5.16 },
  { frequency: 2003.67, db: 5.29 },
  { frequency: 2023.71, db: 5.39 },
  { frequency: 2043.94, db: 5.5 },
  { frequency: 2064.38, db: 5.61 },
  { frequency: 2085.03, db: 5.71 },
  { frequency: 2105.88, db: 5.82 },
  { frequency: 2126.94, db: 5.92 },
  { frequency: 2148.2, db: 6.03 },
  { frequency: 2169.69, db: 6.13 },
  { frequency: 2191.38, db: 6.23 },
  { frequency: 2213.3, db: 6.33 },
  { frequency: 2235.43, db: 6.44 },
  { frequency: 2257.78, db: 6.54 },
  { frequency: 2280.36, db: 6.63 },
  { frequency: 2303.17, db: 6.73 },
  { frequency: 2326.2, db: 6.83 },
  { frequency: 2349.46, db: 6.93 },
  { frequency: 2372.95, db: 7.01 },
  { frequency: 2396.68, db: 7.09 },
  { frequency: 2420.65, db: 7.16 },
  { frequency: 2444.86, db: 7.24 },
  { frequency: 2469.31, db: 7.31 },
  { frequency: 2494.0, db: 7.39 },
  { frequency: 2518.94, db: 7.46 },
  { frequency: 2544.13, db: 7.52 },
  { frequency: 2569.57, db: 7.58 },
  { frequency: 2595.27, db: 7.65 },
  { frequency: 2621.22, db: 7.71 },
  { frequency: 2647.43, db: 7.77 },
  { frequency: 2673.9, db: 7.83 },
  { frequency: 2700.64, db: 7.88 },
  { frequency: 2727.65, db: 7.94 },
  { frequency: 2754.93, db: 7.99 },
  { frequency: 2782.48, db: 8.04 },
  { frequency: 2810.3, db: 8.09 },
  { frequency: 2838.4, db: 8.13 },
  { frequency: 2866.79, db: 8.16 },
  { frequency: 2895.46, db: 8.2 },
  { frequency: 2924.41, db: 8.23 },
  { frequency: 2953.65, db: 8.26 },
  { frequency: 2983.19, db: 8.3 },
  { frequency: 3013.02, db: 8.33 },
  { frequency: 3043.15, db: 8.37 },
  { frequency: 3073.58, db: 8.4 },
  { frequency: 3104.32, db: 8.44 },
  { frequency: 3135.36, db: 8.47 },
  { frequency: 3166.72, db: 8.5 },
  { frequency: 3198.38, db: 8.51 },
  { frequency: 3230.37, db: 8.53 },
  { frequency: 3262.67, db: 8.54 },
  { frequency: 3295.3, db: 8.56 },
  { frequency: 3328.25, db: 8.57 },
  { frequency: 3361.53, db: 8.58 },
  { frequency: 3395.15, db: 8.58 },
  { frequency: 3429.1, db: 8.58 },
  { frequency: 3463.39, db: 8.57 },
  { frequency: 3498.03, db: 8.57 },
  { frequency: 3533.01, db: 8.57 },
  { frequency: 3568.34, db: 8.56 },
  { frequency: 3604.02, db: 8.53 },
  { frequency: 3640.06, db: 8.51 },
  { frequency: 3676.46, db: 8.49 },
  { frequency: 3713.22, db: 8.46 },
  { frequency: 3750.36, db: 8.44 },
  { frequency: 3787.86, db: 8.4 },
  { frequency: 3825.74, db: 8.36 },
  { frequency: 3864.0, db: 8.32 },
  { frequency: 3902.64, db: 8.28 },
  { frequency: 3941.66, db: 8.25 },
  { frequency: 3981.08, db: 8.21 },
  { frequency: 4020.89, db: 8.16 },
  { frequency: 4061.1, db: 8.1 },
  { frequency: 4101.71, db: 8.04 },
  { frequency: 4142.73, db: 7.99 },
  { frequency: 4184.15, db: 7.93 },
  { frequency: 4226.0, db: 7.87 },
  { frequency: 4268.26, db: 7.81 },
  { frequency: 4310.94, db: 7.73 },
  { frequency: 4354.05, db: 7.65 },
  { frequency: 4397.59, db: 7.58 },
  { frequency: 4441.56, db: 7.5 },
  { frequency: 4485.98, db: 7.42 },
  { frequency: 4530.84, db: 7.34 },
  { frequency: 4576.15, db: 7.25 },
  { frequency: 4621.91, db: 7.17 },
  { frequency: 4668.13, db: 7.08 },
  { frequency: 4714.81, db: 6.99 },
  { frequency: 4761.96, db: 6.91 },
  { frequency: 4809.58, db: 6.81 },
  { frequency: 4857.67, db: 6.72 },
  { frequency: 4906.25, db: 6.63 },
  { frequency: 4955.31, db: 6.53 },
  { frequency: 5004.87, db: 6.44 },
  { frequency: 5054.91, db: 6.36 },
  { frequency: 5105.46, db: 6.28 },
  { frequency: 5156.52, db: 6.21 },
  { frequency: 5208.08, db: 6.13 },
  { frequency: 5260.16, db: 6.05 },
  { frequency: 5312.77, db: 5.97 },
  { frequency: 5365.89, db: 5.89 },
  { frequency: 5419.55, db: 5.81 },
  { frequency: 5473.75, db: 5.74 },
  { frequency: 5528.49, db: 5.66 },
  { frequency: 5583.77, db: 5.58 },
  { frequency: 5639.61, db: 5.52 },
  { frequency: 5696.0, db: 5.45 },
  { frequency: 5752.96, db: 5.39 },
  { frequency: 5810.49, db: 5.33 },
  { frequency: 5868.6, db: 5.27 },
  { frequency: 5927.28, db: 5.21 },
  { frequency: 5986.56, db: 5.14 },
  { frequency: 6046.42, db: 5.06 },
  { frequency: 6106.89, db: 4.97 },
  { frequency: 6167.96, db: 4.88 },
  { frequency: 6229.64, db: 4.79 },
  { frequency: 6291.93, db: 4.7 },
  { frequency: 6354.85, db: 4.62 },
  { frequency: 6418.4, db: 4.54 },
  { frequency: 6482.58, db: 4.47 },
  { frequency: 6547.41, db: 4.39 },
  { frequency: 6612.88, db: 4.31 },
  { frequency: 6679.01, db: 4.23 },
  { frequency: 6745.8, db: 4.15 },
  { frequency: 6813.26, db: 4.06 },
  { frequency: 6881.39, db: 3.96 },
  { frequency: 6950.21, db: 3.87 },
  { frequency: 7019.71, db: 3.78 },
  { frequency: 7089.91, db: 3.69 },
  { frequency: 7160.81, db: 3.59 },
  { frequency: 7232.41, db: 3.48 },
  { frequency: 7304.74, db: 3.37 },
  { frequency: 7377.79, db: 3.26 },
  { frequency: 7451.56, db: 3.15 },
  { frequency: 7526.08, db: 3.04 },
  { frequency: 7601.34, db: 2.94 },
  { frequency: 7677.35, db: 2.84 },
  { frequency: 7754.13, db: 2.74 },
  { frequency: 7831.67, db: 2.64 },
  { frequency: 7909.98, db: 2.54 },
  { frequency: 7989.08, db: 2.44 },
  { frequency: 8068.98, db: 2.33 },
  { frequency: 8149.67, db: 2.22 },
  { frequency: 8231.16, db: 2.1 },
  { frequency: 8313.47, db: 1.99 },
  { frequency: 8396.61, db: 1.88 },
  { frequency: 8480.57, db: 1.77 },
  { frequency: 8565.38, db: 1.64 },
  { frequency: 8651.03, db: 1.51 },
  { frequency: 8737.54, db: 1.38 },
  { frequency: 8824.92, db: 1.25 },
  { frequency: 8913.17, db: 1.12 },
  { frequency: 9002.3, db: 1.0 },
  { frequency: 9092.32, db: 0.85 },
  { frequency: 9183.25, db: 0.7 },
  { frequency: 9275.08, db: 0.55 },
  { frequency: 9367.83, db: 0.41 },
  { frequency: 9461.51, db: 0.26 },
  { frequency: 9556.12, db: 0.1 },
  { frequency: 9651.68, db: -0.08 },
  { frequency: 9748.2, db: -0.25 },
  { frequency: 9845.68, db: -0.43 },
  { frequency: 9944.14, db: -0.6 },
  { frequency: 10043.58, db: -0.77 },
  { frequency: 10144.02, db: -0.94 },
  { frequency: 10245.46, db: -1.11 },
  { frequency: 10347.91, db: -1.28 },
  { frequency: 10451.39, db: -1.45 },
  { frequency: 10555.91, db: -1.62 },
  { frequency: 10661.46, db: -1.8 },
  { frequency: 10768.08, db: -2.0 },
  { frequency: 10875.76, db: -2.19 },
  { frequency: 10984.52, db: -2.39 },
  { frequency: 11094.36, db: -2.59 },
  { frequency: 11205.31, db: -2.78 },
  { frequency: 11317.36, db: -3.0 },
  { frequency: 11430.53, db: -3.22 },
  { frequency: 11544.84, db: -3.43 },
  { frequency: 11660.29, db: -3.65 },
  { frequency: 11776.89, db: -3.87 },
  { frequency: 11894.66, db: -4.06 },
  { frequency: 12013.6, db: -4.26 },
  { frequency: 12133.74, db: -4.45 },
  { frequency: 12255.08, db: -4.64 },
  { frequency: 12377.63, db: -4.83 },
  { frequency: 12501.41, db: -5.02 },
  { frequency: 12626.42, db: -5.21 },
  { frequency: 12752.68, db: -5.4 },
  { frequency: 12880.21, db: -5.59 },
  { frequency: 13009.01, db: -5.78 },
  { frequency: 13139.1, db: -5.97 },
  { frequency: 13270.49, db: -6.15 },
  { frequency: 13403.2, db: -6.3 },
  { frequency: 13537.23, db: -6.46 },
  { frequency: 13672.6, db: -6.62 },
  { frequency: 13809.33, db: -6.78 },
  { frequency: 13947.42, db: -6.94 },
  { frequency: 14086.9, db: -7.09 },
  { frequency: 14227.77, db: -7.22 },
  { frequency: 14370.04, db: -7.36 },
  { frequency: 14513.74, db: -7.5 },
  { frequency: 14658.88, db: -7.63 },
  { frequency: 14805.47, db: -7.77 },
  { frequency: 14953.52, db: -7.91 },
  { frequency: 15103.06, db: -8.08 },
  { frequency: 15254.09, db: -8.26 },
  { frequency: 15406.63, db: -8.44 },
  { frequency: 15560.7, db: -8.63 },
  { frequency: 15716.3, db: -8.81 },
  { frequency: 15873.47, db: -8.99 },
  { frequency: 16032.2, db: -9.2 },
  { frequency: 16192.52, db: -9.49 },
  { frequency: 16354.45, db: -9.78 },
  { frequency: 16517.99, db: -10.07 },
  { frequency: 16683.17, db: -10.36 },
  { frequency: 16850.01, db: -10.65 },
  { frequency: 17018.51, db: -10.96 },
  { frequency: 17188.69, db: -11.44 },
  { frequency: 17360.58, db: -11.91 },
  { frequency: 17534.18, db: -12.39 },
  { frequency: 17709.53, db: -12.86 },
  { frequency: 17886.62, db: -13.34 },
  { frequency: 18065.49, db: -13.91 },
  { frequency: 18246.14, db: -14.65 },
  { frequency: 18428.6, db: -15.39 },
  { frequency: 18612.89, db: -16.14 },
  { frequency: 18799.02, db: -16.88 },
  { frequency: 18987.01, db: -17.62 },
  { frequency: 19176.88, db: -18.66 },
  { frequency: 19368.65, db: -19.73 },
  { frequency: 19562.33, db: -20.79 },
  { frequency: 19757.96, db: -21.86 },
  { frequency: 19955.54, db: -22.92 },
];

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
    "none"
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
      (d) => `drop-shadow(0 2px 8px ${getGlowForSentiment(d.sentiment)})`
    )
    .on("mouseover", function (event, d) {
      // no tooltip for now
      // showTooltip(event, d.term, d);
    })
    .on("mouseout", hideTooltip)
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
    .text("Audiophile Terms: Frequency vs Sentiment");

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

function showTooltip(event, term, termData) {
  const tooltip = document.getElementById("chart-tooltip") || createTooltip();
  const freqData = frequencyMapping[term];

  tooltip.innerHTML = `
    <strong>${term}</strong><br>
    Frequency: ${freqData.frequency}Hz<br>
    Sentiment: ${termData.sentiment.toFixed(2)}<br>
    Relevance: ${freqData.relevance.toFixed(1)}<br>
    <em>${termData.summary}</em>
  `;

  tooltip.style.display = "block";
  tooltip.style.left = (event.pageX || event.x) + 10 + "px";
  tooltip.style.top = (event.pageY || event.y) - 10 + "px";
}

function hideTooltip() {
  const tooltip = document.getElementById("chart-tooltip");
  if (tooltip) {
    tooltip.style.display = "none";
  }
}

function createTooltip() {
  const tooltip = document.createElement("div");
  tooltip.id = "chart-tooltip";
  tooltip.style.cssText = `
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
    pointer-events: none;
    z-index: 1000;
    max-width: 200px;
    display: none;
  `;
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
