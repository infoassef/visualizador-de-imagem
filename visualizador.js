/*

 #########################################################################################################
 #    LEIA ANTES DE UTILIZAR                                                                             #
 #                                                                                                       #
 #    1 - Chame o plugin na págia que deseja que o mesmo funcione                                        #
 #    2 - As imagens devem estar dentro da tag <article> para não pegar toadas as imagens do site.       #
 #    3 - Não remover os créditos                                                                        #
 #                                                                                                       #
 #########################################################################################################

 Desenvolvido por: João Assef
 E-mail: joaoassef@gmail.com
 Empresa: www.infoassef.com.br

 */
$("article img").attr('onclick', 'pegaSrc(this.src)');

function pegaSrc(src){

    var tamanhaDaImagem = "40%";
    var titleImagem     = "TopFesta Barretos";
    var altImagem       = "TopFesta Barretos";

    $("#mostraImagensModal").remove();
    $("body").append("<div id='mostraImagensModal' onclick='fechaImagemModal()' style='background-color:rgba(0, 0, 0, 0.70); top: 0; cursor: pointer; position: fixed; top: 0; left: 0; align-items: center; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; z-index: 999; height: 100vh; width: 100%;'>" +
        "<img src='"+src+"' style='box-shadow: 0 0 20px #000' width='"+tamanhaDaImagem+"' title='"+titleImagem+"' alt='"+altImagem+"' border='0'/>"+
        "</div>");
}

function fechaImagemModal(){
    $("#mostraImagensModal").remove();
}