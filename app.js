
function changeButton(text) {
    var displayText = document.querySelector(".lowContainer");
    switch (text) {
        case 'Scope':
            displayText.textContent = "Defines the work to be done - How much work and all expectations - Quality, Cost, Delivery, etc.";
            break;
        case 'Schedule':
            // Define behavior for Schedule button
            displayText.textContent = "Control document defining timing for all project activities, including delivery.";
            break;
        case 'Cost':
            // Define behavior for Cost button
            displayText.textContent = "Expected and actual cost.";
            break;
        case 'Quality':
            // Define behavior for Quality button
            displayText.textContent = "Evaluating the quality of the deliverables as they are being designed, built, and delivery.";
            break;
        case 'Risks':
            // Define behavior for Risks button
            displayText.textContent = "Something that might happen (positive or Negative.";
            break;
        case 'Issues':
            // Define behavior for Issues button
            displayText.textContent = "Something that is happening or has happened (always negative)";
            break;
        case 'Stakeholders':
            // Define behavior for Stakeholders button
            displayText.textContent = "Who is imacted by the project? Has the group of affected changed?";
            break;
        case 'Administration':
            // Define behavior for Admin button
            displayText.textContent = "Reports, Paperwork, Meetings, Communication, and purchases";
            break;
        case 'Approvals':
            // Define behavior for Approvals button
            displayText.textContent = "Approvals - Initial, Milestone, Completion(acceptance)";
            break;
        default:
            // Default behavior if no specific text is provided
            displayText.textContent = "";
            break;
    }
}
