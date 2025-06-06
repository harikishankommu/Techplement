🌐 Overall Purpose
The Techplement Courses website is a clean, modern educational platform landing page.
It showcases available courses, allows user enrollment, and provides details about the platform and contact information.

1. HTML Structure Overview
📌 <!DOCTYPE html> & <html>
Declares the document type and starts the HTML page.
The lang="en" attribute sets the document's language to English.

2. HEAD Section
🧠 Meta & SEO
<meta charset="UTF-8" />: Ensures your website supports all characters.
<meta name="viewport" content="width=device-width, initial-scale=1" />: Makes your site responsive on mobile devices.

🎨 External Links
Google Fonts: Loads the 'Roboto' font.
style.css: Links to your custom CSS for styling.

3. BODY Content
🧢 Header
Contains your logo and a navigation bar.
The nav includes links to: Home, Courses, About, Contact, and Login.
The header uses a dark background and stays fixed (sticky) at the top when scrolling.

🚀 Hero Section
A bold welcome area with:
A headline: “Learn Anytime, Anywhere”.
A subheading encouraging users to explore courses.
A call-to-action button: "Explore Courses", which scrolls to the courses section.

📚 Courses Section
1.Title: “Popular Courses”.
2.Displayed in a grid layout.
3.Each course has:
4.An image.
5.Course title..
6.Short description.
7.Enroll button with course fee.
Total of 12 courses listed, such as Web Development, Data Science, AI, etc.

🧾 About Section
Simple paragraph describing Techplement as a platform that helps learners advance their careers.

✉️ Contact Section
Contains an email contact for support: support@techplement.com.

💬 Enrollment Popup
Hidden by default, this popup appears when a user clicks "Enroll".

Includes:

Course title and message.
A form for name and email.
Payment and "Go Home" buttons.
Controlled using JavaScript (from script.js).

👣 Footer
Contains copyright:
"© 2025 Techplement. All rights reserved."


4. CSS Styling Overview
✏️ General Styles
Uses Roboto font across the site.
Sets a light background and dark text.
Ensures spacing and sizing is consistent using box-sizing: border-box.

🧢 Header
Background color: dark blue (#092137).
Items spaced with Flexbox.
Navigation buttons have subtle shadows and white text with no borders.

📦 Courses Layout
Uses a grid to organize course cards.

Each card includes:
An image.
A brief text.
An action button with price.
Cards have spacing and hover effects (via box shadows).

🪟 Popup (Enrollment)
Positioned centrally and hidden until triggered.
Includes a form with text fields and buttons styled for user interaction.
Overlayed on top of content using z-index and CSS classes like hidden.

📱 Responsive Behavior
The meta viewport and Flex/Grid layout allow the page to be mobile-friendly and adjust well to different screen sizes.

5. JavaScript Functionality (In script.js)
Likely includes:
enroll(course, price): Opens the popup and displays course details.
submitUserDetails(event): Handles form submission.
pay(): Initiates the payment (can be mocked or connected to a real gateway).
closePopup(): Closes the enrollment popup.
scrollToSection(id): Scrolls smoothly to the target section (e.g., "courses").

✅ Summary
1.Your website is well-structured for:
2.Marketing courses with appealing visuals.
3.Allowing user enrollment with a form and popup.
4.Presenting a clean UI with modern web design standards.
