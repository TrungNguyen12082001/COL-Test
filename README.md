Nguyen Tat Trung

Follow 2 questions in the test, one front-end and one back-end. I've chosen the front-end and implemented it all in this source code.

These main components that I've worked is in "src" folder: App.jsx, Modal.jsx and modal.css

For Front-end assessment I've chosen, I have some explanations my code also the function of reusable modal component

As the criteria in assessment, this modal component is judged: Component API design, Accessibility, Bonus: Animation, Bonus: Tests

1. Component API design: The provided code includes a reusable modal component that accepts isOpen and onClose props to control the visibility of the modal. It also allows rendering arbitrary content inside the modal through the children prop. Therefore, it satisfies the requirement for component API design.

2. Accessibility: (Modal.jsx)

   - The modal-overlay element has a role attribute set to "dialog" and aria-modal attribute set to "true", indicating that it represents a modal dialog.

   - The modal-content element receives focus through the tabIndex attribute, allowing keyboard navigation.

   - When the modal is open, the modal-content element is focused using the ref attribute and the useRef hook. It is focused when the modal is opened and remains focused until it is closed.

   - The modal listens for the Escape key press and calls the closeModal function to close the modal.

   - The close button has an aria-label attribute set to "Close" to provide an accessible label for screen readers.

   - ARIA Roles and Attributes: The code includes the role and aria-modal attributes on the modal-overlay element. These attributes help screen readers and assistive technologies understand that the element represents a modal dialog.

   - Focus Management: The code uses the useRef hook to create a reference to the modal-content element. This reference is then passed to the ref attribute of the modal-content element, allowing it to receive focus when the modal is opened. This ensures that keyboard navigation starts from within the modal.

   - Keyboard Navigation: The useEffect hook is used to listen for the Escape key press (keydown event) when the modal is open. Pressing the Escape key triggers the closeModal function, closing the modal.

   - ARIA Label for Close Button: The close button in the code has an aria-label attribute set to "Close". This attribute provides an accessible label to screen readers, making it clear that the button is used to close the modal.

3. Animation (Modal.jsx): I used fade-in effect in the Modal component, this effect is achieved by modifying the opacity of the ".modal-content" element using CSS transitions. When the "isModalOpen" state is true, the "fade-in" class is added to the modal-content element, which triggers the transition and gradually increases the opacity from 0 to 1, resulting in a fade-in animation effect.

4. Tests: The library I used to test in this component is Jest, have created totally 6 test cases, 3 passed and 3 failed, I still find where the error of these fail cases are, but the component run fine, I think my 3 fail test cases wrote not correct.
