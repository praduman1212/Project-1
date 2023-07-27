<!-- <?php
$name=$_POST['$name'];
$username=$_POST['$username'];
$password=$_POST['$password'];
$dob=$_POST['$dob'];
$email=$_POST['$email'];
$age=$_POST['$age'];

// create connection
$conn=new mysqli('localhost','root','','om_database');
if($conn->connect_error){
    die('Connectiion failed:'.$conn->connect_error);
}else{
    $stmt=$conn->prepare("insert into Registration(name,username,password,dob,email,age)values(?,?,?,?,?,?)");
    $stmt->bind_param("sssisi",$name,$username,$password,$dob,$email,$age);
    $stmt->execute();
    echo "Registration Successfull";
    $stmt->close();
    $conn->close();
}

?> -->