export class User {
    constructor(
        public ProductName : string,
        public ProductShortCode : string,
        public Category : string,
        public Price : number,
        public Description : string,
        public ImageUrl : string, 
        public IsBestAchived : boolean,
        public CreatedDate : Date,
        public Origin : string
    ) {}
}
