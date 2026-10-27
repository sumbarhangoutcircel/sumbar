/**
 * =============================================================================
 * SUMBAR HANGOUT CIRCLE - DATA & LOGIKA WEBSITE (CLEAN EDITORIAL THEME)
 * =============================================================================
 */

// 1. LINK RESMI KOMUNITAS (WhatsApp, Instagram & Discord)
const LINK_GRUP_WHATSAPP = 'https://chat.whatsapp.com/JS7HIwFJaKlJtNHr6Rrsi1';
const LINK_INSTAGRAM_RESMI = 'https://www.instagram.com/sumbarhangoutcircle/';
const LINK_DISCORD_RESMI = 'https://discord.gg/bBbvepyUeZ';


// 2. PLAYLIST MUSIK LATAR
const PLAYLIST = [
  {
    id: 1,
    title: 'Monolog',
    artist: 'Pamungkas',
    srcWebm: 'assets/audio/monolog-pamungkas.webm'
  },
  {
    id: 2,
    title: 'Bahagia Lagi',
    artist: 'Piche Kota (Slowed + Reverb)',
    srcWebm: 'assets/audio/bahagia-lagi-piche-kota.webm'
  },
  {
    id: 3,
    title: 'Shape of My Heart',
    artist: 'Backstreet Boys (Slowed + Reverb)',
    srcWebm: 'assets/audio/shape-of-my-heart.webm'
  },
  {
    id: 4,
    title: 'The One That Got Away',
    artist: 'Katy Perry (Slowed + Reverb)',
    srcWebm: 'assets/audio/the-one-that-got-away.webm'
  }
];


// 3. LIST PARA STAFF (8 SLOT RESMI)
const DAFTAR_STAFF = [
  {
    id: 1,
    name: 'xRed',
    role: 'Founder & Developer',
    instagram: '@ronaldahlanputra_1',
    photoUrl: 'assets/images/staff/staff-1.jpg',
    objectPosition: 'object-center'
  },
  {
    id: 2,
    name: 'Pia',
    role: 'Co-Founder & Koordinator Trip',
    instagram: '@SumbarHangoutCircle',
    photoUrl: 'assets/images/logo-shc.jpg'
  },
  {
    id: 3,
    name: 'Okta',
    role: 'Administrator',
    instagram: '@rizkylapoh',
    photoUrl: 'assets/images/staff/staff-3.jpg',
    objectPosition: 'object-center'
  },
  {
    id: 4,
    name: 'Desi',
    role: 'Administrator',
    instagram: '@desirahmadani04',
    photoUrl: 'assets/images/staff/staff-4.jpg',
    objectPosition: 'object-center'
  },
  {
    id: 5,
    name: 'Jenzz',
    role: 'Administrator',
    instagram: '@jenzz_98',
    photoUrl: 'assets/images/staff/staff-5.jpg',
    objectPosition: 'object-top'
  },
  {
    id: 6,
    name: 'Mannz',
    role: 'Administrator',
    instagram: '@hermn.sl',
    photoUrl: 'assets/images/staff/staff-6.jpg',
    objectPosition: 'object-top'
  },
  {
    id: 7,
    name: 'SLOT 7',
    role: 'Tour Leader & Field Guide',
    instagram: '@SumbarHangoutCircle',
    photoUrl: 'assets/images/logo-shc.jpg'
  },
  {
    id: 8,
    name: 'SLOT 8',
    role: 'Social Media & Creative Content',
    instagram: '@SumbarHangoutCircle',
    photoUrl: 'assets/images/logo-shc.jpg'
  }
];


// 4. DAFTAR FOTO & VIDEO GALERI
const DAFTAR_MEDIA = [
  {
    id: 1,
    type: 'image',
    category: 'Trip Air Terjun',
    url: 'assets/images/gallery/trip-air-terjun-1.jpg',
    title: 'Eksplorasi & Healing Air Terjun Lubuk Hitam',
    location: 'Air Terjun Lubuk Hitam, Teluk Kabung, Padang'
  },
  {
    id: 2,
    type: 'image',
    category: 'Trip Air Terjun',
    url: 'assets/images/gallery/trip-air-terjun-2.jpg',
    title: 'Pose Ceria di Kaki Air Terjun Tiga Tingkat',
    location: 'Air Terjun Lubuk Hitam, Teluk Kabung, Padang'
  },
  {
    id: 3,
    type: 'image',
    category: 'Trip Air Terjun',
    url: 'assets/images/gallery/trip-air-terjun-3.jpg',
    title: 'Momen Kehangatan & Serunya Rombongan Circle',
    location: 'Air Terjun Lubuk Hitam, Teluk Kabung, Padang'
  },
  {
    id: 4,
    type: 'image',
    category: 'Trip Air Terjun',
    url: 'assets/images/gallery/trip-air-terjun-4.jpg',
    title: 'Dokumentasi Rombongan Hangout Circle di Alam Bebas',
    location: 'Air Terjun Lubuk Hitam, Teluk Kabung, Padang'
  },
  {
    id: 5,
    type: 'image',
    category: 'Kopdar Santai di Cafe',
    url: 'assets/images/gallery/kopdar-cafe-1.jpg',
    title: 'Kopdar Santai & Ngopi Bareng Circle di Cafe',
    location: 'Coffee Shop, Kota Padang'
  },
  {
    id: 6,
    type: 'image',
    category: 'Kopdar Santai di Cafe',
    url: 'assets/images/gallery/kopdar-cafe-2.jpg',
    title: 'Momen Kehangatan & Pose Seru Anggota Komunitas',
    location: 'Coffee Shop, Kota Padang'
  },
  {
    id: 7,
    type: 'image',
    category: 'Kopdar Santai di Cafe',
    url: 'assets/images/gallery/kopdar-cafe-3.jpg',
    title: 'Sharing Cerita & Melepas Penat Bersama Circle',
    location: 'Coffee Shop, Kota Padang'
  },
  {
    id: 8,
    type: 'video',
    category: 'First Meet SHC',
    url: 'assets/videos/first-meet-lubuk-hitam.mp4',
    poster: 'assets/images/gallery/cover-first-meet.jpg',
    tiktokUrl: 'https://www.tiktok.com/@sumbarhongoutcircl/video/7698264158340418836',
    title: 'First Meet Acara Komunitas di Air Terjun Lubuk Hitam',
    location: 'Air Terjun Lubuk Hitam, Teluk Kabung, Padang'
  }
];


/* =============================================================================
   SISTEM LOGIKA & INTERAKSI
   ============================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Cegah window tergeser ke samping secara horizontal
  window.addEventListener('scroll', () => {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  }, { passive: true });

  initNavbar();
  initGroupJoin();
  renderStaffList();
  renderMediaGallery();
  initLightbox();
  initMusicPlayer();
});

// 1. Mobile Navbar
function initNavbar() {
  const toggle = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileNav');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    links.forEach(l => {
      l.addEventListener('click', () => menu.classList.add('hidden'));
    });
  }
}

// 2. Gabung Grup, Instagram & Discord Links
function initGroupJoin() {
  const groupUrlInput = document.getElementById('groupUrlDisplay');
  const copyBtn = document.getElementById('copyGroupLinkBtn');
  const copyFeedback = document.getElementById('copyFeedback');
  const directButtons = document.querySelectorAll('.direct-join-btn');
  const igButtons = document.querySelectorAll('.official-ig-link');
  const discordButtons = document.querySelectorAll('.official-discord-link');

  if (groupUrlInput) groupUrlInput.value = LINK_GRUP_WHATSAPP;
  directButtons.forEach(btn => btn.href = LINK_GRUP_WHATSAPP);
  igButtons.forEach(btn => btn.href = LINK_INSTAGRAM_RESMI);
  discordButtons.forEach(btn => btn.href = LINK_DISCORD_RESMI);

  if (copyBtn && groupUrlInput) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(LINK_GRUP_WHATSAPP).then(() => {
        if (copyFeedback) {
          copyFeedback.classList.remove('hidden');
          setTimeout(() => copyFeedback.classList.add('hidden'), 2500);
        }
      }).catch(() => {
        groupUrlInput.select();
        document.execCommand('copy');
        if (copyFeedback) {
          copyFeedback.classList.remove('hidden');
          setTimeout(() => copyFeedback.classList.add('hidden'), 2500);
        }
      });
    });
  }
}

// 3. Render List Staff (Clean Editorial Profile Card)
function renderStaffList() {
  const staffGrid = document.getElementById('staffGrid');
  if (!staffGrid) return;

  staffGrid.innerHTML = DAFTAR_STAFF.map(member => {
    const isLogo = member.photoUrl.includes('logo');
    const objPos = member.objectPosition || 'object-center';
    return `
    <div class="bento-card rounded-3xl p-4 sm:p-5 flex flex-col justify-between group">
      <div>
        <!-- Portrait Photo Frame -->
        <div class="relative h-64 sm:h-72 w-full mb-3.5 rounded-2xl overflow-hidden bg-[#0a120d] flex items-center justify-center">
          <img src="${member.photoUrl}" alt="${member.name}" class="zoom-img w-full h-full ${isLogo ? 'object-contain p-6' : `object-cover ${objPos}`}" onerror="this.src='assets/images/logo-shc.jpg'">
          
          <!-- Subtle Dark Gradient at bottom of photo (only for personal photos) -->
          ${!isLogo ? '<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>' : ''}

          <!-- Minimalist Floating Role Pill -->
          <div class="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-[#09100c]/90 backdrop-blur-md border border-white/10 text-center">
            <span class="text-xs font-bold text-lime-400 tracking-wide uppercase truncate block">
              ${member.role}
            </span>
          </div>
        </div>

        <!-- Staff Name -->
        <h3 class="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-lime-300 transition-colors line-clamp-1 mt-1">
          ${member.name}
        </h3>
        
        <!-- Instagram Link -->
        <a href="https://instagram.com/${member.instagram.replace('@','')}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-lime-400 mt-1 transition-colors">
          <i class="fa-brands fa-instagram text-lime-400 text-sm"></i>
          <span>${member.instagram}</span>
        </a>
      </div>
    </div>
  `;
  }).join('');
}

// 4. Render Galeri Foto & Video (Bisa Digeser / Interactive Slider)
function renderMediaGallery() {
  const slider = document.getElementById('mediaGalleryGrid');
  const prevBtn = document.getElementById('galleryPrevBtn');
  const nextBtn = document.getElementById('galleryNextBtn');
  const dotsContainer = document.getElementById('galleryDotsContainer');
  const filterBtns = document.querySelectorAll('.media-filter-btn');
  let currentFilter = 'all';

  if (!slider) return;

  // Mendapatkan index kartu yang paling dekat dengan sisi kiri slider
  function getClosestCardIndex() {
    const cards = slider.querySelectorAll('.gallery-slide-card');
    if (!cards.length) return 0;
    const sliderLeft = slider.getBoundingClientRect().left;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const diff = Math.abs(card.getBoundingClientRect().left - sliderLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    return closestIndex;
  }

  // Scroll halus ke kartu spesifik berdasarkan index
  function scrollToCardIndex(index) {
    const cards = slider.querySelectorAll('.gallery-slide-card');
    if (!cards.length) return;
    const clampedIndex = Math.max(0, Math.min(index, cards.length - 1));
    const targetCard = cards[clampedIndex];

    const sliderRect = slider.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();
    const targetLeft = slider.scrollLeft + (cardRect.left - sliderRect.left);

    slider.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    });
  }

  // Update status tombol panah dan titik indikator
  function updateSliderControls() {
    const cards = slider.querySelectorAll('.gallery-slide-card');
    if (!cards.length) {
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;
      if (dotsContainer) dotsContainer.innerHTML = '';
      return;
    }

    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // Toleransi 4px untuk layar high-DPI
    if (prevBtn) prevBtn.disabled = scrollLeft <= 4;
    if (nextBtn) nextBtn.disabled = scrollLeft >= maxScroll - 6;

    // Hitung dot mana yang aktif
    let activeIndex = 0;
    if (scrollLeft >= maxScroll - 16) {
      activeIndex = cards.length - 1;
    } else {
      activeIndex = getClosestCardIndex();
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.gallery-dot');
      dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  // Render titik indikator
  function renderDots(count) {
    if (!dotsContainer) return;
    if (count <= 1) {
      dotsContainer.innerHTML = '';
      return;
    }

    dotsContainer.innerHTML = Array.from({ length: count }).map((_, idx) => `
      <button class="gallery-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Dokumentasi ke-${idx + 1}" title="Dokumentasi ke-${idx + 1}"></button>
    `).join('');

    dotsContainer.querySelectorAll('.gallery-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        scrollToCardIndex(idx);
      });
    });
  }

  // Render daftar item media
  function displayItems() {
    const filtered = DAFTAR_MEDIA.filter(item => {
      if (currentFilter === 'all') return true;
      return item.type === currentFilter;
    });

    if (filtered.length === 0) {
      slider.innerHTML = `
        <div class="w-full py-16 text-center text-gray-400">
          <i class="fa-solid fa-photo-film text-3xl mb-3 text-lime-400/50"></i>
          <p class="text-sm font-semibold">Belum ada media di kategori ini.</p>
        </div>
      `;
      renderDots(0);
      updateSliderControls();
      return;
    }

    slider.innerHTML = filtered.map((item, idx) => {
      const isVideo = item.type === 'video';

      return `
        <div class="gallery-slide-card bento-card rounded-3xl overflow-hidden p-3.5 flex flex-col group relative">
          
          <!-- Media Showcase Box -->
          <div class="relative ${isVideo ? 'h-72 sm:h-80' : 'h-64 sm:h-72'} w-full overflow-hidden rounded-2xl bg-black flex items-center justify-center">
            ${
              isVideo
                ? `<video src="${item.url}" ${item.poster ? `poster="${item.poster}"` : ''} controls class="w-full h-full object-contain bg-black" preload="metadata" playsinline draggable="false"></video>
                   <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-red-600/90 backdrop-blur-md text-white flex items-center gap-1.5 shadow-md pointer-events-none">
                     <i class="fa-solid fa-video"></i> Video HD
                   </div>
                   <button class="gallery-preview-video-btn absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/75 hover:bg-black/95 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5 transition-all shadow-md" data-src="${item.url}" data-title="${item.title}" data-loc="${item.location}">
                     <i class="fa-solid fa-expand text-[10px]"></i> Layar Penuh
                   </button>`
                : `<img src="${item.url}" alt="${item.title}" draggable="false" class="zoom-img w-full h-full object-cover cursor-pointer gallery-preview-img" data-title="${item.title}" data-loc="${item.location}" data-src="${item.url}" onerror="this.src='assets/images/logo-shc.jpg'">
                   <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-lime-500/90 backdrop-blur-md text-black flex items-center gap-1.5 shadow-md pointer-events-none">
                     <i class="fa-solid fa-camera"></i> Foto HD
                   </div>
                   <button class="gallery-preview-img absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/75 hover:bg-black/95 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5 transition-all shadow-md" data-src="${item.url}" data-title="${item.title}" data-loc="${item.location}">
                     <i class="fa-solid fa-magnifying-glass-plus text-[10px]"></i> Buka HD
                   </button>`
            }

            ${item.category && !isVideo ? `
              <div class="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-lime-300 pointer-events-none border border-white/10 flex items-center gap-1">
                <i class="fa-solid ${item.category.includes('Cafe') || item.category.includes('Kopdar') ? 'fa-mug-saucer' : 'fa-tree'} text-[10px]"></i>
                <span>${item.category}</span>
              </div>
            ` : ''}
          </div>

          <!-- Info Details -->
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2">
                <h3 class="font-heading font-extrabold text-white text-base group-hover:text-lime-300 transition-colors line-clamp-1">
                  ${item.title}
                </h3>
                <span class="text-[11px] font-mono text-gray-500 flex-shrink-0">#0${idx + 1}</span>
              </div>
              <p class="text-xs text-lime-400/95 flex items-center gap-1.5 mt-1.5">
                <i class="fa-solid fa-location-dot text-[11px]"></i>
                <span class="truncate">${item.location}</span>
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
              ${
                isVideo
                  ? `<button class="gallery-preview-video-btn text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1.5 transition-colors" data-src="${item.url}" data-title="${item.title}" data-loc="${item.location}">
                       <i class="fa-solid fa-circle-play text-sm"></i> Putar Full HD
                     </button>`
                  : `<button class="gallery-preview-img text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1.5 transition-colors" data-src="${item.url}" data-title="${item.title}" data-loc="${item.location}">
                       <i class="fa-solid fa-expand text-xs"></i> Lihat Foto Penuh
                     </button>`
              }
              ${item.tiktokUrl ? `<a href="${item.tiktokUrl}" target="_blank" class="text-gray-400 hover:text-white font-medium flex items-center gap-1"><i class="fa-brands fa-tiktok text-xs"></i> TikTok</a>` : `<span class="text-gray-500 font-medium">Sumbar Hangout</span>`}
            </div>
          </div>

        </div>
      `;
    }).join('');

    renderDots(filtered.length);
    slider.scrollLeft = 0;
    updateSliderControls();

    // Pause audio when video is played
    slider.querySelectorAll('video').forEach(vid => {
      vid.addEventListener('play', () => {
        const bgAudio = document.getElementById('bgAudioPlayer');
        if (bgAudio && !bgAudio.paused) {
          bgAudio.pause();
        }
      });
    });

    // Lightbox click for photos
    slider.querySelectorAll('.gallery-preview-img').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        window.openCustomLightbox(
          el.getAttribute('data-src'),
          el.getAttribute('data-title'),
          el.getAttribute('data-loc'),
          false
        );
      });
    });

    // Lightbox click for videos
    slider.querySelectorAll('.gallery-preview-video-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.openCustomLightbox(
          btn.getAttribute('data-src'),
          btn.getAttribute('data-title'),
          btn.getAttribute('data-loc'),
          true
        );
      });
    });
  }

  // Navigation Prev / Next (Pindah per-kartu dengan mulus)
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentIdx = getClosestCardIndex();
      scrollToCardIndex(Math.max(0, currentIdx - 1));
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const cards = slider.querySelectorAll('.gallery-slide-card');
      const currentIdx = getClosestCardIndex();
      scrollToCardIndex(Math.min(cards.length - 1, currentIdx + 1));
    });
  }

  slider.addEventListener('scroll', updateSliderControls, { passive: true });

  // Mouse Drag to Scroll Tanpa Membuka Lightbox Secara Tidak Sengaja
  let isDown = false;
  let startX = 0;
  let scrollStartLeft = 0;
  let hasDragged = false;

  slider.addEventListener('mousedown', (e) => {
    // Abaikan jika bukan tombol klik kiri, atau klik kontrol tombol/video/link
    if (e.button !== 0) return;
    if (e.target.closest('button') || e.target.closest('video') || e.target.closest('a')) return;

    isDown = true;
    hasDragged = false;
    slider.classList.add('is-dragging');
    startX = e.pageX;
    scrollStartLeft = slider.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('is-dragging');

    // Beri jeda kecil sebelum mereset hasDragged agar klik yang terjadi saat drag terblokir
    setTimeout(() => {
      hasDragged = false;
      updateSliderControls();
    }, 60);
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const diff = e.pageX - startX;
    if (Math.abs(diff) > 6) {
      hasDragged = true;
    }
    slider.scrollLeft = scrollStartLeft - diff;
  });

  // Blokir event click jika pengguna sedang men-drag
  slider.addEventListener('click', (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }, true);

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-lime-500', 'text-black', 'font-bold');
        b.classList.add('bg-[#101913]', 'text-gray-300');
      });

      btn.classList.remove('bg-[#101913]', 'text-gray-300');
      btn.classList.add('bg-lime-500', 'text-black', 'font-bold');

      currentFilter = btn.getAttribute('data-filter');
      displayItems();
    });
  });

  displayItems();
}

// 5. Lightbox Preview Foto & Video
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const video = document.getElementById('lightboxVideo');
  const caption = document.getElementById('lightboxCaption');
  const loc = document.getElementById('lightboxLocation');
  const closeBtn = document.getElementById('lightboxClose');

  window.openCustomLightbox = function(src, titleText, locText, isVideo = false) {
    if (!modal) return;
    if (isVideo) {
      if (img) img.classList.add('hidden');
      if (video) {
        video.classList.remove('hidden');
        video.src = src;
        video.play().catch(() => {});
      }
      const bgAudio = document.getElementById('bgAudioPlayer');
      if (bgAudio && !bgAudio.paused) bgAudio.pause();
    } else {
      if (video) {
        video.pause();
        video.src = '';
        video.classList.add('hidden');
      }
      if (img) {
        img.classList.remove('hidden');
        img.src = src;
      }
    }
    if (caption) caption.textContent = titleText;
    if (loc && loc.querySelector('span')) loc.querySelector('span').textContent = locText;
    modal.classList.remove('hidden');
  };

  function closeLightbox() {
    if (modal) modal.classList.add('hidden');
    if (video) {
      video.pause();
      video.src = '';
      video.classList.add('hidden');
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeLightbox();
    }
  });
}

// 6. Background Music Player dengan Playlist
let isMusicPlaying = false;
let currentTrackIndex = 0;

function initMusicPlayer() {
  const audio = document.getElementById('bgAudioPlayer');
  if (!audio) return;

  const playBtns = document.querySelectorAll('.music-toggle-btn');
  const prevBtn = document.getElementById('prevTrackBtn');
  const nextBtn = document.getElementById('nextTrackBtn');
  const muteBtn = document.getElementById('musicMuteBtn');
  const minimizeBtn = document.getElementById('minimizeMusicBtn');
  const musicCard = document.getElementById('floatingMusicPlayer');
  const miniToggle = document.getElementById('minimizedMusicPill');
  const vinylIcon = document.getElementById('musicVinylDisk');
  const equalizer = document.getElementById('musicEqualizer');
  const statusText = document.getElementById('musicStatusText');
  const navLabel = document.getElementById('navMusicLabel');
  const trackTitle = document.getElementById('musicTrackTitle');
  const trackArtist = document.getElementById('musicTrackArtist');
  const trackCounter = document.getElementById('musicTrackCounter');
  const miniTitle = document.getElementById('miniTrackTitle');

  audio.volume = 0.8;

  function loadTrack(index, autoPlay = false) {
    currentTrackIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[currentTrackIndex];

    audio.src = track.srcWebm;
    audio.load();

    if (trackTitle) trackTitle.textContent = track.title;
    if (trackArtist) trackArtist.textContent = track.artist;
    if (miniTitle) miniTitle.textContent = track.title;
    if (trackCounter) trackCounter.textContent = `${currentTrackIndex + 1}/${PLAYLIST.length}`;

    if (autoPlay) {
      attemptPlay();
    }
  }

  function attemptPlay() {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setPlayingState(true);
      }).catch(err => {
        console.log('Autoplay ditunda oleh browser sampai interaksi pertama:', err);
        setPlayingState(false);
        setupAutoplayOnFirstGesture();
      });
    }
  }

  let gestureRegistered = false;
  function setupAutoplayOnFirstGesture() {
    if (gestureRegistered) return;
    gestureRegistered = true;

    const triggerEvents = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown', 'scroll', 'wheel'];

    function handleFirstGesture() {
      if (isMusicPlaying) {
        cleanup();
        return;
      }

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          setPlayingState(true);
          cleanup();
        }).catch(() => {
          // Terus dengarkan event klik/pointerdown jika scroll belum memicu aktivasi audio browser
        });
      }
    }

    function cleanup() {
      triggerEvents.forEach(evt => {
        window.removeEventListener(evt, handleFirstGesture, true);
        document.removeEventListener(evt, handleFirstGesture, true);
      });
    }

    triggerEvents.forEach(evt => {
      window.addEventListener(evt, handleFirstGesture, { capture: true, passive: true });
      document.addEventListener(evt, handleFirstGesture, { capture: true, passive: true });
    });
  }

  function setPlayingState(playing) {
    isMusicPlaying = playing;

    playBtns.forEach(btn => {
      const icon = btn.querySelector('.play-icon-state');
      if (icon) {
        icon.className = playing
          ? 'play-icon-state fa-solid fa-pause text-xs text-black'
          : 'play-icon-state fa-solid fa-play text-xs text-black ml-0.5';
      }
    });

    if (navLabel) {
      navLabel.textContent = playing ? 'Musik Berjalan 🎵' : 'Putar Musik';
    }

    if (vinylIcon) {
      if (playing) {
        vinylIcon.classList.add('vinyl-spinning');
        vinylIcon.classList.remove('vinyl-paused');
      } else {
        vinylIcon.classList.add('vinyl-paused');
      }
    }

    if (equalizer) {
      if (playing) equalizer.classList.remove('opacity-0');
      else equalizer.classList.add('opacity-0');
    }

    if (statusText) {
      statusText.textContent = playing ? 'Memutar Musik 🎵' : 'Klik Layar untuk Musik 🎵';
      statusText.className = playing ? 'text-[10px] font-semibold text-lime-400' : 'text-[10px] font-semibold text-gray-400';
    }
  }

  window.toggleMusic = function() {
    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setPlayingState(true);
        }).catch(err => {
          console.warn('Audio playback error:', err);
        });
      }
    } else {
      audio.pause();
      setPlayingState(false);
    }
  };

  playBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.toggleMusic();
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      loadTrack(currentTrackIndex + 1, isMusicPlaying);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      loadTrack(currentTrackIndex - 1, isMusicPlaying);
    });
  }

  audio.addEventListener('ended', () => {
    loadTrack(currentTrackIndex + 1, true);
  });

  audio.addEventListener('play', () => setPlayingState(true));
  audio.addEventListener('pause', () => setPlayingState(false));

  if (muteBtn) {
    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.muted = !audio.muted;
      if (audio.muted) {
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark text-red-400 text-[10px]"></i>';
      } else {
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-high text-lime-400 text-[10px]"></i>';
      }
    });
  }

  if (minimizeBtn && musicCard && miniToggle) {
    minimizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      musicCard.classList.add('hidden');
      miniToggle.classList.remove('hidden');
    });

    miniToggle.addEventListener('click', () => {
      miniToggle.classList.add('hidden');
      musicCard.classList.remove('hidden');
    });
  }

  loadTrack(0, true);
}
