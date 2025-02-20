document.getElementById('getLocation').addEventListener('click', async () => {
    try {
        let response = await fetch("https://ipinfo.io/json?token="); // API token qo'shing
        let data = await response.json();

        console.log(data);

        let loc = data.loc.split(',');
        document.getElementById('latitude').textContent = loc[0];
        document.getElementById('longitude').textContent = loc[1];
        document.getElementById('country').textContent = data.country;
        document.getElementById('city').textContent = data.city;
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('isp').textContent = data.org;

        document.getElementById('map').src = `https://www.google.com/maps?q=${loc[0]},${loc[1]}&output=embed`;
    } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
    }
});
