import { click_state_machine } from "./mode_state_machine.js";
import { set_mode } from "./dom_elements.js";


async function initMap() { // square_cord is an arra that stores the cordinates for a diagonal of the cut square_cord
    set_mode("BRANCH");
    let postes = []
    let square_limits = {top: null, bot: null}

    let map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(0, 0),
        zoom: 3,
    });

    google.maps.event.addListener(map, "click", (event) => {
        console.log("hey");
        click_state_machine(event.latLng.toJSON(), postes, square_limits, map); 
    });

}




window.initMap = initMap;