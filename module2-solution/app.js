(function () {
'use strict';

var shoppingList = [
  {name: "Milk", quantity:"2 packs"},
  {name: "Coffee", quantity:"1 pack"},
  {name: "Cookies", quantity:"10 bags"},
  {name: "Donuts", quantity:"3 packs"},
  {name: "Chips", quantity:"2 bags"},
  {name: "Ice-cream", quantity:"2 packs"},
  {name: "Pizza", quantity:"3 boxes"},
  {name: "Chocolate", quantity:"3 packs"},
  {name: "Cola", quantity:"2 bottles"},
  {name: "Confiture", quantity:"2 jars"}
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//List1 ToBuyController

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
   var list1 = this;

   list1.items1 = shoppingList;

   list1.moveItem = function (itemIndex) {
        ShoppingListCheckOffService.moveItem(itemIndex);
    };

}

//List2 AlreadyBoughtController

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;
    list2.itemName = "";
    list2.itemQuantity = "";

    list2.items2 = ShoppingListCheckOffService.getItems();

    list2.moveItem = function (itemIndex) {
      ShoppingListCheckOffService.moveItem(itemIndex);
    };
}

//service
function ShoppingListCheckOffService() {
    var service=this;
    var items1 = shoppingList;
    var items2 = [];

    service.moveItem = function (itemIndex) {
      var item = items1[itemIndex];

      items2.push(item);
      items1.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items2;
    };



}

})();
