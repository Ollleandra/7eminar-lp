//Завдання: Розрахунок і виведення загальної вартості при зміні кількості квитків (спіннер - +).
var Sum = (function () {
    function Sum() {
        this.count = 1;
    }
    Sum.prototype.getCount = function (increment, decrement) {
        if (increment === void 0) { increment = false; }
        if (decrement === void 0) { decrement = false; }
        this.count = increment == true && this.count < 20 ? ++this.count : this.count;
        this.count = decrement == true && this.count > 1 ? --this.count : this.count;
        this.updateCount();
        this.updatePrice();
    };
    Sum.prototype.updateCount = function () {
        var setCount = document.getElementById('setCount');
        setCount.value = this.count;
    };
    Sum.prototype.updatePrice = function () {
        var total = document.getElementById('total');
        var price = document.getElementById('price').innerHTML;
        total.innerHTML = (this.count * +price).toString();
    };
    return Sum;
}());
var sum = new Sum();
document.getElementById('increment').addEventListener('click', function () {
    sum.getCount(true, false);
});
document.getElementById('decrement').addEventListener('click', function () {
    sum.getCount(false, true);
});
