import { ActionFormData } from "@minecraft/server-ui";

// Function to show a button menu
function showMenu(player) {
    const form = new ActionFormData();
    form.title("Server Menu");
    form.body("Select an option:");
    form.button("Teleport to Spawn");
    form.button("Shop");

    form.show(player).then((response) => {
        if (response.canceled) return;
        // Check which button was pressed (0 or 1)
        if (response.selection === 0) {
            player.sendMessage("Teleporting...");
        }
    });
}