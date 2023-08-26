/*      Bu günki dersimiz booleanslar.Javascripte Şu ana kadar sadece iki çeşit veri tipi öğrendik. Sayılar ve metinler, booleans 
javascripte başka bir veri türüdür.

    **booleanslar özeldir sadece iki çeşit veri tipi alabilirler. true ve false. Adlarından da anlaşılabileceği üzere bir şeyin 
        doğru mu yanlış olduğunu temsil eder. logic is loading :) .


*/
true 
false

console.log(3 > 5);   //aynı zamanda kıyaslama operatörüde boolean oluşturmanın bir yoludur pek tabi :)

/*
    **booleansların syntax dili

        *booleans oluşturmak için true yada false yazarız kodun içine. booleanslar tırnak işaretleri ile sarılmaz yoksa o artık 
        boolean değil bir string olur.

*/

console.log(typeof 'true');

console.log(typeof true);

/* bahsi geçmişken kıyaslama operatörleri (kıyaslama operatörleri aritmetik öperatörlerinden daha düşük öncelik sıralamaısına sahiptir.)
    
    *   > greater than
    
    *   < less than 
    
    *   >= greater than or equal to

    *   <= less than or equal to

    *   === equal to

    *   !== not equal to

        ***artık booleans operatörlerini ve kıyaslama öperatörlerini öğrendik bunları if-else statements ile birlikte kullanacağız.***
*/

//      **C dilinden if yapısına hakimiz az çok. JS tete olaylar farklı değildir.


    console.log(5 === '5.00');

    if (true) {
        console.log('hello');
    } 
    else {
        console.log('else');
    }


    if(30 >= 16) {
        console.log('You can drive');
    } else {
        console.log('You can not drive');
    }

    /*
        if( booleans ) {    

        } else {

        }
    
    yapısı yukarıda olduğu gibidir. if komutunun yanındaki parantez içine yazılan formül doğru ise if kodunun içine yazılan kodları,
    yanlış ise else kodunun içine yazılan kodları çalıştıracaktır. if-else ayrımının olduğu yere branches denir kodumuz orada artık
    iki farklı dala ayrılacaktır.
    
    */

        const age = 16;
        
        if (age >= 16) {
            console.log('you can drive');
            console.log('Congrats');
        } else if(age>=14) {
            console.log('almost there!');
        } else {
            console.log('you can not drive');
        }

    /* yukarıda birden fazla dala nasıl ayırılır onun güzel bir örneği var. Ezbere hiç gerek yok else dalının hemen yanına kod 
    yazabiliyorduk bizde bu sefer kod olarak yine if kullanarak kodumuzu yeni bir dal ayırımına getirdik.
-     
    */


/*   
        **logical operators**
    
    && ==> and

    || ==> or

    !  ==> not (uno reverse cart!)


*/


