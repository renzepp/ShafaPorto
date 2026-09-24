# 🎨 THEME UPDATE CHECKLIST

## Palet Warna Baru (Cherry Red + Navy + Beige)
- Primary: `#C41E3A` (cherry red)
- Secondary: `#2C3E50` (navy)
- Accent: `#C9A876` (beige tan)
- Dark: `#1F2939` (navy gelap)
- Light: `#FFFBF7` (cream putih)
- Border: `#D4CCC4` (beige muted)
- Surface-tint: `#F5EDE6` (beige pale)
- Surface-gray: `#E8E0D8` (beige gray)
- Text-muted: `#6B7280` (gray)

---

## STEP 1: FIGMA VARIABLES
1. Buka Figma project
2. Panel kiri → **Variables** (scroll atau di sidebar)
3. Klik icon **⋯** (tiga titik) → **Import variables**
4. Copy-paste seluruh isi dari **`figma-variables.json`**
5. Klik Import → selesai, semua layer update otomatis ✅

---

## STEP 2: GITHUB - styles.css
1. Buka file `styles.css` di repo kamu
2. **Copy-paste SEMUANYA** dari `styles-updated.css` (replace total)
   - ✅ `:root` variables sudah update
   - ✅ `--surface-pink` sudah diganti ke `--surface-tint`
   - ✅ `--gradient-brand` sudah pakai `var()` untuk fleksibilitas
   - ✅ `.project-tag` dan `.project-note` sudah pakai `--surface-tint`

---

## STEP 3: GITHUB - app.js
1. Buka file `app.js` di repo kamu
2. **Copy-paste SEMUANYA** dari `app-updated.js` (replace total)
   - ✅ Struktur tetap sama (renderProject, renderProjects, initSmoothScroll)
   - ✅ `initSkillsChart()` sekarang ambil warna dari `--primary` CSS variable
   - ✅ Chart color auto-update kalau kamu ganti `:root` di styles.css

---

## STEP 4: GITHUB - Update docs/design.md (opsional)
Kalau ada tabel warna di `docs/design.md`, update `surface-pink` → `surface-tint` di sana juga.

---

## STEP 5: GIT COMMIT & PUSH
```bash
git add styles.css app.js
git commit -m "chore: update theme to cherry red + navy + beige palette"
git push
```

---

## ✅ DONE!
- Figma semuanya sudah connected ke variabel baru
- GitHub sudah update styles.css dan app.js
- Warna chart sekarang ambil dari CSS variable (tinggal edit `:root` buat ubah semua)
- Ke depannya: edit `:root` → semua warna update otomatis di website 🎉

---

## 📝 TIPS
- Kalau mau ganti warna ke depannya, cukup edit `:root` di `styles.css`
- Sama-sama update di Figma variables buat consistency
- Chart color bakal auto-update tanpa perlu edit `app.js`
