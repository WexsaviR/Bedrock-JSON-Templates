import { MessageFormData } from "@minecraft/server-ui";

// Function to show a Yes/No confirmation
function confirmAction(player) {
    const form = new MessageFormData();
    form.title("Warning");
    form.body("Do you want to clear your inventory?");
    form.button1("Yes, Clear"); // Index 1
    form.button2("Cancel");    // Index 0

    form.show(player).then((response) => {
        if (response.canceled) return;
        // Check response selection
        if (response.selection === 1) {
            player.sendMessage("Inventory cleared!");
        }
    });
}