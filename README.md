# Detailing Wolves - Landing Page

Professional car detailing service landing page for Detailing Wolves in Tirupur.

## 📁 File Structure

```
detailing-wolves/
│
├── index.html                          # Main HTML file
├── styles.css                          # CSS stylesheet
├── script.js                           # JavaScript functionality
│
├── assets/                             # Assets folder
│   ├── logo.png                        # Main logo (Detailing Wolves)
│   ├── google-logo.png                 # Google logo for reviews
│   ├── hero-bg.jpg                     # Hero section background image
│   │
│   ├── icons/                          # Icon files
│   │   ├── whatsapp-icon.svg          # WhatsApp icon (green)
│   │   ├── call-icon.svg              # Call icon (white)
│   │   ├── phone-icon.svg             # Phone icon (orange)
│   │   ├── location-icon.svg          # Location pin icon (orange)
│   │   ├── pricing-icon.svg           # Pricing/badge icon (orange)
│   │   ├── technician-icon.svg        # Crown icon (orange)
│   │   ├── products-icon.svg          # Shield/checkmark icon (orange)
│   │   ├── call-white.svg             # Call icon for floating button
│   │   └── whatsapp-white.svg         # WhatsApp icon for floating button
│   │
│   ├── services/                       # Service images
│   │   ├── ppf.jpg                     # Paint Protection Film image
│   │   ├── ceramic-coating.jpg         # Ceramic Coating image
│   │   ├── car-wash.jpg                # Car Wash image
│   │   ├── graphene-coating.jpg        # Graphene Coating image
│   │   ├── denting-painting.jpg        # Denting & Painting image
│   │   └── interior-cleaning.jpg       # Interior Cleaning image
│   │
│   └── gallery/                        # Gallery/Results images
│       ├── result-1.jpg                # Before/After result 1
│       ├── result-2.jpg                # Before/After result 2
│       └── result-3.jpg                # Before/After result 3
│
└── README.md                           # This file
```

## 🎨 Design Specifications

### Color Palette
- **Primary Orange**: `#FF6B35`
- **Dark Black**: `#000000`
- **White**: `#FFFFFF`
- **Light Gray**: `#F5F5F5`
- **Text Dark**: `#1A1A1A`
- **Text Gray**: `#666666`
- **WhatsApp Green**: `#25D366`

### Typography
**Fonts to Use:**
- Primary: `Montserrat` (Google Fonts)
- Alternative: `Poppins` (Google Fonts)
- Weights needed: 400, 500, 600, 700, 800

**Font Sizes:**
- Hero H1: 56px
- Section H2: 38px
- Service H3: 20px
- Body Text: 14-16px

### Logo Specifications
**Main Logo (logo.png):**
- Format: PNG with transparent background
- Recommended size: 200x60px (or similar ratio)
- Should contain wolf/diamond icon + "DETAILING WOLVES" text in orange

## 🖼️ Image Requirements

### Hero Background (hero-bg.jpg)
- Size: 1920x1080px or larger
- Content: Car detailing scene (person cleaning car with gloved hands visible)
- Dark overlay will be applied via CSS

### Service Images (all 600x400px minimum)
1. **PPF**: Hand applying protective film to car
2. **Ceramic Coating**: Ceramic coating being applied to car surface
3. **Car Wash**: Pressure washing car exterior
4. **Graphene Coating**: Close-up of car being polished
5. **Denting & Painting**: Car paint spray booth
6. **Interior Cleaning**: Interior cleaning with foam/vacuum

### Gallery Images (all 800x600px minimum)
- Real photos of detailed cars at your facility
- Showing results with orange/branded backdrop
- Multiple angles of finished work

## 🎯 Icon Requirements

All icons should be:
- **Format**: SVG preferred (or PNG with transparency)
- **Size**: 24x24px to 48x48px
- **Color**: Orange (#FF6B35) or as specified

### Icon List:
1. **WhatsApp** - Green (#25D366) circular background
2. **Phone/Call** - Orange or white depending on context
3. **Location Pin** - Orange
4. **Pricing Badge** - Circle with tick/badge symbol
5. **Crown** - For "Experienced technicians"
6. **Shield/Checkmark** - For "Premium-grade products"

## 🚀 Setup Instructions

1. **Download all files**
   - index.html
   - styles.css
   - script.js

2. **Create assets folder structure**
   ```
   mkdir -p assets/icons assets/services assets/gallery
   ```

3. **Add your images and icons**
   - Place your logo in `assets/`
   - Add icons in `assets/icons/`
   - Add service images in `assets/services/`
   - Add gallery images in `assets/gallery/`

4. **Add Google Fonts** (optional - already linked in CSS)
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
   ```

5. **Open index.html** in a web browser

## ⚙️ Configuration

### Update Phone Number
Replace `+919940698326` in:
- index.html (header, floating buttons, location section)
- script.js (WhatsApp integration)

### Update Google Maps
Replace the iframe `src` in the Location section with your actual location embed URL

### Update Business Hours
Modify the hours in the Location section as needed

### Add Your Content
- Replace placeholder images with your actual photos
- Update service descriptions
- Add your real Google reviews
- Customize FAQ answers

## 🌐 Features

1. ✅ **Fixed Header** - Sticky navigation
2. ✅ **Hero Section** - Full-screen with CTA
3. ✅ **Services Grid** - 6 service cards with hover effects
4. ✅ **Gallery Slider** - Results showcase with navigation
5. ✅ **Why Choose Us** - 3 key features
6. ✅ **Location** - Google Maps + business hours
7. ✅ **Reviews** - Google reviews display
8. ✅ **FAQ Accordion** - Expandable questions
9. ✅ **Booking Form** - WhatsApp integration
10. ✅ **Floating Buttons** - Call & WhatsApp quick access
11. ✅ **Page Indicator** - Shows scroll position
12. ✅ **Responsive Design** - Mobile, tablet, desktop

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support & Customization

For customization or issues:
1. Check that all asset paths are correct
2. Ensure images are properly sized
3. Verify all links point to correct destinations
4. Test on multiple devices/browsers

## 📝 Notes

- **WhatsApp Integration**: Form submissions redirect to WhatsApp with pre-filled message
- **Smooth Scrolling**: All anchor links use smooth scroll behavior
- **Animations**: Elements fade in on scroll
- **SEO Ready**: Semantic HTML structure
- **Performance**: Optimized CSS and minimal JavaScript

## 🎥 Animations

- Service cards: Hover lift effect
- Gallery images: Scale on hover
- Scroll animations: Fade in from bottom
- Button hovers: Lift with shadow
- FAQ accordion: Smooth expand/collapse

## 🔗 External Dependencies

None required! Pure HTML, CSS, and JavaScript.

Optional: Google Fonts (Montserrat, Poppins)

---

**Created for Detailing Wolves - Professional Car Detailing in Tirupur**

© 2024 Detailing Wolves. All rights reserved.
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8!2d77.34!3d11.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzM2LjAiTiA3N8KwMjAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 