import { ModalFormData } from "@minecraft/server-ui";

// Function to show an input form
function showSettings(player) {
    const form = new ModalFormData();
    form.title("Player Settings");
    form.textField("Nickname", "Type here...", "Guest");
    form.toggle("Enable Flight", false);
    form.slider("FOV", 30, 110, 1, 70);
    form.dropdown("Class", ["Warrior", "Mage", "Archer"], 0);

    form.show(player).then((response) => {
        if (response.canceled) return;
        // Get values from the array in order
        const [name, flight, fov, classIndex] = response.formValues;
        player.sendMessage(`Saved: ${name}`);
    });
}