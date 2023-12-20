<?php
include("templates/header.php");
?>

<div class="card">
    <div class="card-body">
        <table class="table table-bordered table-striped">
        <img src="images/wallpaper.png" class="img-thumbnail" alt="">
        <div id="span-intro" class="text-center">
            <span id="span-presentation" class="text-center h3">
                <strong>
                    <br> 
                    Freminet Baptiste
                    <br>
                    Développeur d'application WEB
                </strong> 
            </span>
        </div>
        <!-- <button class="btn btn-primary"id="test">test</button> -->
        <script>
            $(document).ready(function() {
                $("#test").click(function(){
                    $("#span-intro").addClass('bg-red');
                });
            });
        </script>
    </div>
</div>
<?php
include("templates/footer.php");
?>