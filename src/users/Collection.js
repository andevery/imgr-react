class UsersCollection {
  constructor() {
    this.items = [];
  }

  getAll() {
    return this.items;
  }

  get(userID) {
    return this.items.find((x) => x.id == userID)
  }

  create(item) {
    this.items.push(item);
    this.change();
  }

  delete(userID) {
    this.items.splice(this.items.findIndex((x) => x.id == userID), 1);
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

export const Users = new UsersCollection()
