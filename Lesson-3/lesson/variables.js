let variable1 = 4;
let variable2 = 7;
let calculation = variable1 + variable2;
console.log(calculation);
console.log(calculation+2);
let message = 'Hello There';
console.log(message); console.log(';');

calculation = 30; /*bir değişkene yeni bir değer atarken let kullanmadık çünkü let sadece değişkeni  oluşturmaya yarar, o değişken
                    zaten oluşturulmuştu.*/
console.log(calculation);

/*

console.log(); ifadesi bize öğeyi denetle menüsündeki konsol seçeneğine gelince oradaki konsola mesaj çıkarmamıza yarar.
*console.log(''); konsolda, tırnak içeresinde girdiğin stringi çıkarır.
*console.log(variable1); konsolda, variable1 değişkeni içine depolanmış olan datayı çıkartır.


    **Bu günki dersimiz değişkenler. Değişken ifadesinin ne olduğunu zaten biliyorum C dilinden fakat JS dilinde biraz farklılıkları 
    var. C de atayacağımız değişken türleri vardır. Değişkenin içinde depolanacak olan dataya göre farklı farklı değişken türleri 
    vardır. Fakat burada değişken türleri bulunmamaktadır yazdığımız datanın türü fark etmeksizin depolayacaktır. Hadi jsteki 
    değişkenlerin syntaxını inceleyelim.

        * let variable1 = 4  yada let variable1 = 'string' 

            let derleyiciye bir değişken oluşturmak istediğimizi bildirir ve derleyici bizim için bir değişken oluşturur.

            hemen sonrasında değişkene isim veririz. Her değişkenin ismi değişkene özel olmalıdır.

            daha sonra = ile bir değer atarız o değişkene. Muhtemelen ileride son kullanıcıdan veri girişi almayı öğreneceğiz ve tıpkı 
            C dilinde olduğu gibi kullanıcıdan alınan veriler değişkenlerin içinde depolanır.

    **Js teki bir kaç çeşit var tanımlamayı öğrenelim.

        *const ==> bu değişken ingilizce constant yani sabitin kısaltılmış halidir. tıpkı C dilinde olduğu gibi değeri daha sonra değiştirilemeyen değişkenleri tanımlamak için kullanılır.

            const varName = value;

        *var ==> değişken  tanımlamanın bir diğer yolu ise var kullanarak tanımlamaktır. Bu bi tık eski kaçıyor o yüzden pek tercih 
        edilmiyor.

            var varName = value;

        *typeof ==> değişken ismi olmasada hadi bunuda öğrenelim. Adından da anlaşılabileceği üzere bir datanın türünü kullanıcıya 
        belirtir. Bu data bir variable da olabilir, stringde olabilir const ta olabilir.    

*/