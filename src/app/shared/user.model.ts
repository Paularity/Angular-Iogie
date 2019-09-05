export class User {
    id: number;
    name: string;
    username: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        }
    };
    phone: string;
    website: string;
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    };    
}
