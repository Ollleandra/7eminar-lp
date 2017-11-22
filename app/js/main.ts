//Завдання: Розрахунок і виведення загальної вартості при зміні кількості квитків (спіннер - +).

class Sum{
    private count: number = 1;

    public getCount(increment: boolean=false, decrement: boolean=false): void{
        this.count = increment==true&&this.count<20 ? ++this.count : this.count;
        this.count = decrement==true&&this.count>1 ? --this.count : this.count;
        this.updateCount();
        this.updatePrice();
    }
    private updateCount(): void{
        const setCount = document.getElementById('setCount') as HTMLInputElement;
        setCount.value = this.count;
    }
    private updatePrice(): void{
        const total = document.getElementById('total');
        const price = document.getElementById('price').innerHTML;
        total.innerHTML = (this.count * +price).toString();
    }
}
const sum = new Sum();
document.getElementById('increment').addEventListener('click', function () {
    sum.getCount(true, false);
});
document.getElementById('decrement').addEventListener('click', function () {
    sum.getCount(false, true);
});