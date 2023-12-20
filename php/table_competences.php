<?php
include("templates/header.php");
?>
<div class="card">
    <div class="card-header">
        <h4>Tableau compétences</h4>
    </div>
    <div class="card-body">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Réalisations</th>
                    <th>Gérer le patrimoine informatique</th>
                    <th>Répondre aux incidents et aux demandes d'assistance et d'évolution</th>
                    <th>Développer la présence en ligne de l'organisation</th>
                    <th>Travailler en mode projet</th>
                    <th>Mettre à disposition des utilisateurs un service informatique</th>
                    <th>Organiser son developpement professionnel</th>
                </tr>
            </thead>
            <script>
                $(document).ready(function() {
                    $(".redirection-projet").click(function(){
                        var zone=$(this);
                        console.log(zone.data("href"));
                        window.location.href = zone.data("href");
                    });
                });
            </script>
            <tbody>
                <tr>
                    <td class="redirection-projet cursor-pointer" data-href="projet-erp.php">Mise en place d'un ERP</td>
                    <td class="text-center align-middle "></td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                </tr>
                <tr>
                    <td class="redirection-projet cursor-pointer" data-href="projet-android.php">Réalisation d'une application mobile pour les ambulances de Chateauneuf</td>
                    <td class="text-center align-middle"></td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle"></td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle"></td>
                </tr>
                <tr>
                    <td class="redirection-projet cursor-pointer" data-href="">Mise en place logiciel de ticketing: GLPI</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle"></td>
                    <td class="text-center align-middle"></td>
                    <td class="text-center align-middle"></td>
                    <td class="text-center align-middle"></td>
                </tr>
                <tr>
                    <td class="redirection-projet cursor-pointer" data-href="">Réalisation d'un site vitrine pour une entrprise: GRAD</td>
                    <td class="text-center align-middle"></td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                    <td class="text-center align-middle">X</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<?php
include("templates/footer.php");
?>