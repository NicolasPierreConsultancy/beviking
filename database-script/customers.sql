CREATE TABLE Customers(
    CustomerID int NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(255) NOT NULL,
    NewsLetter BIT,
    PRIMARY KEY(CustomerID)
)