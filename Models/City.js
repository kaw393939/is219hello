module.exports = class City {
    constructor(data = null) {
        if(data) {
            this.id = data.id;
            this.city = data.city;
            this.city_ascii = data.city_ascii;
            this.lat = data.lat;
            this.lng = data.lng;
            this.iso2 = data.iso2;
            this.iso3 = data.iso3;
            this.capital = data.capital;
            this.admin_name = data.admin_name;
        }

    }
    //Factory Method to Create a City
    static create(data) {
        return new City(data);
    }
}