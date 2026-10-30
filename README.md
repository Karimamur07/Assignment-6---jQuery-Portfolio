Karima Mursalimova

IT-2502

Part 1. Getting Started with jQuery

Task 0. Setup

For the initial setup, I included the jQuery library from a CDN in the `<head>` section of the HTML document. To ensure the script runs only after the HTML document is fully loaded, I wrapped the code inside the `$(document).ready()` function. Finally, I verified the successful connection by printing `"jQuery is ready!"` to the browser console.

<img width="534" height="24" alt="image" src="https://github.com/user-attachments/assets/8e4b02b2-0f6c-4c7c-a721-a31ac77c8f59" />

<img width="317" height="66" alt="image" src="https://github.com/user-attachments/assets/e4a7aa41-ee6e-4c97-9d4f-3ab53a507937" />

<img width="558" height="159" alt="image" src="https://github.com/user-attachments/assets/ec1d0588-fe8e-47fc-9b2a-2ad60eeacf92" />


Task 1. Selectors & CSS

In this task, I created a personal profile section with a welcome headline, introduction, and a "Welcome to My Portfolio" title. I demonstrated the use of different jQuery selectors: a tag selector (`$("body")`), an ID selector (`$("#welcome")`), and a class selector (`$(".headline")`). Using the `.text()` method, I dynamically changed the greeting text when a button is clicked. Additionally, I used the `.css()` method to create a fully functional Light and Dark theme switcher that changes the background color and text color of the page.

<img width="527" height="280" alt="image" src="https://github.com/user-attachments/assets/263e1e6e-c9b9-40da-aded-f39a5bd13168" />

<img width="472" height="538" alt="image" src="https://github.com/user-attachments/assets/6366acb9-be4e-4707-860b-8a8f755cb693" />

<img width="431" height="347" alt="image" src="https://github.com/user-attachments/assets/ea610650-9c82-4754-bc00-829172c528a4" />

<img width="418" height="182" alt="image" src="https://github.com/user-attachments/assets/9e677aca-4a5b-46bf-9417-460b2e26effd" />

<img width="448" height="157" alt="image" src="https://github.com/user-attachments/assets/89aa40fa-57d5-4588-aeb1-5828a3e898a9" />

<img width="427" height="184" alt="image" src="https://github.com/user-attachments/assets/627b5847-a3df-4bcd-ab64-bd7280ac55f1" />


Part 2. jQuery Effects

Task 2. Visibility Methods

I created an "About Me" section containing a short biography, a current status message ("Currently learning jQuery!"), and a list of fun facts. I placed the status and fun facts inside a separate container. Using jQuery's `.hide()`, `.show()`, and `.toggle()` methods, I added three buttons that allow the user to control the visibility of this container.

<img width="542" height="340" alt="image" src="https://github.com/user-attachments/assets/0758c22b-cc31-4d0d-8803-702e3ec48e42" />

<img width="316" height="238" alt="image" src="https://github.com/user-attachments/assets/e5e1d8bb-94f2-4782-be62-055b2350508b" />

<img width="599" height="292" alt="image" src="https://github.com/user-attachments/assets/23c07fa5-b1f5-4909-93e3-c90cd50a4fe4" />

<img width="584" height="167" alt="image" src="https://github.com/user-attachments/assets/ac7da519-f1f5-4cb6-82fb-3c1617c1c84d" />

<img width="577" height="257" alt="image" src="https://github.com/user-attachments/assets/a5908491-d21c-4ef9-88bd-1148ec3b53d1" />


Task 3. Fade Methods

I created an image gallery containing two images (my profile picture and a photo representing my hobby). Using jQuery's `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()` methods, I added three buttons to smoothly control the visibility of the images. I also used time parameters (like `1000` milliseconds and `"fast"`) to make the fading effect more noticeable.

<img width="564" height="291" alt="image" src="https://github.com/user-attachments/assets/3b2c0dbd-86ec-4f54-a03d-55205abce90c" />

<img width="346" height="225" alt="image" src="https://github.com/user-attachments/assets/79526df8-0df2-43b6-ab0c-6986e4e76154" />

<img width="451" height="441" alt="image" src="https://github.com/user-attachments/assets/9109372a-1e66-4236-a80f-15e29078eabd" />

<img width="332" height="141" alt="image" src="https://github.com/user-attachments/assets/4a4da0f5-3626-411c-a4bc-641c5fa68c05" />

<img width="437" height="426" alt="image" src="https://github.com/user-attachments/assets/f61328e2-c4f8-4fc0-b42d-adde7ff10a0d" />


Task 4. Slide Methods

I created an accordion-style section with three clickable headings: "My Favorite Music," "My Favorite Movie," and "My Favorite Subject." I placed related information inside collapsible panels beneath each heading. Using the `.slideToggle()` method and jQuery DOM traversing (`.next()`), clicking a heading smoothly slides the corresponding panel up or down.

<img width="546" height="503" alt="image" src="https://github.com/user-attachments/assets/20b18eab-7657-4b16-9a9e-f09f8024582d" />

<img width="380" height="275" alt="image" src="https://github.com/user-attachments/assets/521bd31b-882c-4605-85a1-f81917645d73" />

<img width="548" height="352" alt="image" src="https://github.com/user-attachments/assets/cc2b341d-cc07-4304-a304-a8c3e08d853b" />

<img width="206" height="241" alt="image" src="https://github.com/user-attachments/assets/2fa2b723-f3ca-43e6-9bd2-11c9e02b0214" />


Part 3. DOM Manipulation with jQuery

Task 5. Add & Remove Elements

I created a section displaying a list of technical skills. I added a text input and three buttons to manipulate the list. Using jQuery's `.append()` and `.prepend()` methods, users can add a new skill to the end or the beginning of the list. The `.remove()` method is used to delete the last item. I also implemented a validation check using `.trim()` to prevent empty skills from being added.

<img width="526" height="323" alt="image" src="https://github.com/user-attachments/assets/1eb63101-d6b5-46a6-8813-10089009e196" />

<img width="445" height="529" alt="image" src="https://github.com/user-attachments/assets/5e6ea627-5610-4ddf-b25a-503cf54a8af0" />

<img width="354" height="212" alt="image" src="https://github.com/user-attachments/assets/d02f7b7d-5406-4f01-bba9-e12ce7dfcf86" />

<img width="349" height="199" alt="image" src="https://github.com/user-attachments/assets/9ac881c3-ed13-4076-88e8-5457f0173e01" />

<img width="430" height="124" alt="image" src="https://github.com/user-attachments/assets/83d90fe2-c961-425d-9ac3-90d581fae039" />

<img width="354" height="222" alt="image" src="https://github.com/user-attachments/assets/32187867-95b1-4481-b5d7-c7557f63aef6" />

<img width="436" height="132" alt="image" src="https://github.com/user-attachments/assets/54ac0fda-19e5-4771-bef4-1611da0abf40" />

<img width="361" height="222" alt="image" src="https://github.com/user-attachments/assets/404a464d-bea8-44de-9ccb-5124a0a681d2" />


Task 6. Modifying Attributes

I added a social media link (initially pointing to my GitHub profile) and a button. When the button is clicked, I used jQuery's `.attr()` method to dynamically change the destination URL (href) of the link to LinkedIn. Additionally, I used `.text()` to update the link's display text so the user knows where it will lead.

<img width="538" height="168" alt="image" src="https://github.com/user-attachments/assets/be6a6569-8bf7-48b6-8e8c-bcd79cd7f12e" />

<img width="538" height="119" alt="image" src="https://github.com/user-attachments/assets/e947ea90-b4cc-46ab-b618-24b4dc048571" />

<img width="313" height="150" alt="image" src="https://github.com/user-attachments/assets/8183475e-8601-4ef1-97e3-64a7441f0cee" />

<img width="349" height="151" alt="image" src="https://github.com/user-attachments/assets/2b977ba0-5e98-42ab-af90-256e03f17ae1" />


Task 7. Form Interaction

I created a contact form with inputs for Name and Email. I used the `.on("input")` event listener to detect changes as the user types. By combining the `.val()` method (to read the input values) and the `.text()` method (to display them), I implemented a live preview below the form that updates in real-time with every keystroke.

<img width="527" height="489" alt="image" src="https://github.com/user-attachments/assets/5ee1e91f-e289-40af-80ce-c4bd48185fa2" />

<img width="519" height="268" alt="image" src="https://github.com/user-attachments/assets/2ca9cb4c-7915-4139-875f-03a4e19c5ce3" />

<img width="280" height="351" alt="image" src="https://github.com/user-attachments/assets/2aebc25b-e2d3-4830-910e-7e0a786d25dc" />

<img width="439" height="127" alt="image" src="https://github.com/user-attachments/assets/089ab033-e19d-42d4-b86c-d822151049c1" />
