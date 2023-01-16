import React, {useState} from "react";
import Dizim from "./dizi";
const dongu=[];

function Listem()
{
  
    const [yas,yeniyas]= useState('');
    const [isim,yeniisim]= useState('');
    const [soyisim,yenisoyisim]= useState('');
    const [toplam,yenitoplam]= useState(1);
    const [silinen,yenisilinen]= useState(0);
  
    function BtnSilBasti(satir,e)
    {
      
        console.log(satir);
        dongu.splice((satir)-1-(silinen),1);
        yenisilinen(silinen+1);
        console.log(silinen);
    }
function KullaniciEkleBtn(e)
{
    e.preventDefault();
  
   
    yenitoplam(toplam+1);
    dongu.push(
<tr>
    <td>{toplam}</td>
    <td> {isim}</td>
    <td>{soyisim}</td>
    <td>{yas}</td>
    <td>{yas>30 ? "Kırmızı": "Yeşil"}</td>
    <td><button onClick={()=> BtnSilBasti(toplam)} className="btn btn-danger">Sil</button></td>
</tr>

    )
    
    console.log("Yeni Kullanıcı adı: "+isim+ " "+soyisim + " && "+yas + " eklendi."+ dongu.length);
}


    ///////////////////////// veri grubu

function Tabloyaveriekle(e)
{
    console.log("çalışıyorumda göstermiyorum");
    e.preventDefault();
    for(let i=toplam;i<=toplam+2;i++)
    {
        dongu.push(
        <tr>
        <td>{i}</td>
        <Dizim/>
        <td><button onClick={()=> BtnSilBasti(i)} className="btn btn-danger">Sil</button></td>
        </tr>
        )
        
    }
    yenitoplam(toplam+3);
}
    /////////////////////////



    return(
<div className="card" >
<table  className="table table-striped  table-dark table-hover">
    <thead>
        <tr>
            <td>Sira No</td>
            <td>İsim</td>
            <td>Soyisim</td>
            <td>Yaş</td>
            <td>Durum</td>
            <td>Sil</td>
        </tr>
    </thead>
    <tbody className="">
                  {dongu}
    </tbody>
</table>
<h3 className="header mx-auto">Kullanıcı Ekleme Bölümü</h3>
<div className="card-body">
    
    <form className="px-4 py-3">
        
        <div className="form-group" >
        <label className="mt-2" type="text"
            name="isim"
            id="isim"
            placeholder="İsim Giriniz">isim</label>
        <input onChange={(e) => yeniisim(e.target.value)} value={isim} name="isim" type="text" id="isim" className="form-control"/>
        </div>

            <div className="form-group" >
            <label className="mt-2"
            type="text"
            name="Soyisim"
            id="Soyisim"
            placeholder="İsim Giriniz">Soyisim</label>
            <input onChange={(e) => yenisoyisim(e.target.value)} value={soyisim} name="Soyisim" type="text" id="Soyisim" className="form-control"/>
            </div>


    <div className="form-group" >
            <label className="mt-2" type="text"
            name="yas"
            id="yas"
            placeholder="Yaş Giriniz">Yaş</label>
            <input   onChange={(e) => yeniyas(e.target.value)} value={yas} name="yas" type="text" id="yas" className="form-control"/>
            </div>

<button className="btn btn-danger align-content-center justify-content-end mt-4" onClick={KullaniciEkleBtn}>Kullanıcı Ekle</button>
<button onClick={Tabloyaveriekle}>Tabloyu doldur reis</button>
    </form>
</div>




</div>
    );



}

export default Listem;