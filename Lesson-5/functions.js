/*      **Js fonksiyonlarını zaten kullanıyorduk şu ana kadar hadi daha detaylı tanımlandıralım.*/

/*

    function functionName() {       ==> yanda görüldüğü gibi kullanılır. süslü parantezler arasında kodlarımı yazarız.


    }

*/

function function1(){
    console.log('hello');
    console.log(2 + 2);
}

/* fonksiyonu oluşturduktan sonra daha sonra gidip html dosyasında script etiketleri arasına fonksiyonun adını ve parametre listelerini
yazarak fonksiyonumuzu çağırıp kullanabiliriz.
 

    **Neden fonksiyonları kullanırız ??

        *çünkü yazılım sektöründe son derece önemli olan algoritma mantığına uygun şekilde kod yazmanı sağlar. Şiir gibi yazıcaksın 
        o kodu son derece tertipli düzenli olucak.



    **Scope
        JSte scope denen bir olay vardır. Örnekle açıklamak gerekirse mesela bir fonksiyon scope oluşturur ve o fonksiyonun içinede
        tanımladığın değişkenler sadece o fonksiyon içerisinde var olur. bunu yapan diğer bir komut ise if komutudur.

 */

/* C dilinde olduğu gibi buradada return statement ile bir değer döndürebiliriz. return statementa yazdığımızı, fonksiyon dışarıya çıktı
olarak verecektir.

    hadi bu meretin syntaxına bakalım.

        *return diyip tanımlarız sonra bi value veririz ve fonksiyon o valueyi çıktı yapar.

        return 5; dediğimizde fonksiyon dışarıya 5 değerini bastırır. prototürkün klonlama yaptığı videoda return statementın altına 
        html kodlarını dizerek daha sonra fonksiyonu çağırıp o html kodlarının çıktısını alıp kullandı böyle bir kullanım vardı ama
        syntaxının nasıl olduğu hakkında pek bir bilgim yok.

        return (
            <p> Now u are using html in js </p> 
        )

            yukarıdaki gibi. ayriyeten o react js te fonksiyonu tanımladıktan sonra o js dosyasının en altında kullanılan

                export defaul functionName; ifadesi o js sayfası içerisine tanımla bir çok fonksiyondan hangisinin defaul olarak 
                seçileğini belirtir. daha sonra bu js dosyasını başka bir js içinde import ettiğimizde hödük diye o fonksiyon ekrana
                fırlıyor.
 
*/