class AccountsCollection {
  constructor() {
    this.items = [
      {id: 1, username: 'andy_odds', password: 'password', token: 'andy_odds_aasadflhfewoikdslkjdsa', media: 33, followedBy: 1839, follows: 234},
      {id: 2, username: 'msssachesets', password: 'password', token: 'andy_odds_aasadflhfewoikdslkjdsa', media: 33, followedBy: 1839, follows: 234},
      {id: 3, username: 'ollollollo.lo', password: 'password', token: 'andy_odds_aasadflhfewoikdslkjdsa', media: 33, followedBy: 1839, follows: 234},
      {id: 4, username: 'moscow.district.self', password: 'password', token: 'andy_odds_aasadflhfewoikdslkjdsa', media: 33, followedBy: 1839, follows: 234},
    ];
  }

  getAll() {
    return this.items;
  }

  get(itemID) {
    return this.items.find((x) => x.id == itemID)
  }

  create(item) {
    this.items.push(item);
    this.change();
  }

  delete(itemID) {
    this.items.splice(this.items.findIndex((x) => x.id == itemID), 1);
    this.change();
  }

  update(item) {
    this.items.splice(this.items.findIndex((x) => x.id == item.id), 1, item);
    this.change();
  }

  change() {
    if (this.onChange) {
      this.onChange();
    }
  }
}

export const Accounts = new AccountsCollection()
