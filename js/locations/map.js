function initMap() {


    const mapDiv = document.querySelector('.map')

    const newyork = { lat: 40.8, lng: -73 }
    const washington = { lat: 46, lng: -119 }
    const stodmo = { lat: 18.8, lng: -69 }

    const locations = [newyork, washington, stodmo]

    let map = new google.maps.Map(mapDiv, {
        zoom: 4,
        center: newyork,
    });


    locations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map
        })
    })

    const mapBtns = document.querySelectorAll('.mapbtn')

    mapBtns.forEach(mapBtn => {
        mapBtn.addEventListener('click', () => {
            let location

            if (mapBtn.id === 'NY') {
                location = newyork
            }
            else if (mapBtn.id === 'washington') {
                location = washington
            }
            else {
                location = stodmo
            }

            const newPos = new google.maps.LatLng(location.lat, location.lng)

            map.setOptions({
                center: newPos
            })



        })
    })
}