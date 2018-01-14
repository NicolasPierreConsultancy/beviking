<?
    /*
        Connection to the database
    */
    class DBConnection{

        var $host = '';
        var $userName = '';
        var $password = '';
        var $db = 'beviking';
        var $dbConn;

        function connect(){
            $con = mysqli_connect($this->$host, $this->$userName, $this->$password, $this->$db);

            if(!$con){
                 die('Database connection failed');
            } else {
                $this->myconn = $con;
            }

            return $this->myconn;
        }

        function disconnect(){
            mysqli_close($myconn);
        }
    }
?>