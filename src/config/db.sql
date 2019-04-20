DROP DATABASE IF EXISTS sequelize;
CREATE DATABASE sequelize;

USE sequelize;
CREATE TABLE `sequelize`.`employees` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `dob` DATE NOT NULL,
  `sex` BIT NULL,
  `address` NVARCHAR(100) NULL,
  PRIMARY KEY (`ID`));
