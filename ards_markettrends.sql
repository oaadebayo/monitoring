-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2019 at 05:04 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ards_markettrends`
--

-- --------------------------------------------------------

--
-- Table structure for table `marketmonitoring`
--

CREATE TABLE `marketmonitoring` (
  `id` int(255) NOT NULL,
  `date` date NOT NULL,
  `marketname` varchar(50) NOT NULL,
  `producename` varchar(50) NOT NULL,
  `price` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `username` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marketmonitoring`
--

INSERT INTO `marketmonitoring` (`id`, `date`, `marketname`, `producename`, `price`, `quantity`, `username`) VALUES
(1, '2009-11-12', 'ORganized360', 'aaa', 200, 20, ''),
(2, '2009-11-12', 'Abaji', 'Rice', 2000, 20, ''),
(3, '2019-12-26', 'Something', 'Another thing', 3343, 76, 'remiadebayo');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `password` varchar(128) NOT NULL,
  `position` varchar(25) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `username`, `firstname`, `lastname`, `password`, `position`) VALUES
(1, 'remmyghty@gmail.com', 'remiadebayo', '', '', '123456', 'Program Analyst'),
(2, 'remmyghty@gmail.com', 'wale', 'Oluremi', 'Adedamola', 'qwerty', 'ProgramAnalyst'),
(3, 'remmyghty@gmail.com', 'oluremiadebayo', 'Oluremi', 'Adebayo', 'qwerty', 'ProgramAnalyst'),
(4, 'sadeadu@gmail.com', 'itsrheezy', 'Sade', 'Adebayo', '123456', 'ProgramAnalyst'),
(5, 'sadeadu@gmail.com', 'itsrheezy', 'Sade', 'Adebayo', '12345', 'ProgramAnalyst'),
(6, 'sadeadu@gmail.com', 'itsrheezy', 'Sade', 'Adebayo', '0000', 'ProgramAnalyst'),
(7, 'remmyghty@gmail.com', 'FEMI_', 'Oluremi', 'Adebayo', '1111', 'ProgramAnalyst'),
(8, 'remmyghty@gmail.com', 'wale', 'Oluremi', 'Adebayo', '12345', 'ProgramAnalyst');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `marketmonitoring`
--
ALTER TABLE `marketmonitoring`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `marketmonitoring`
--
ALTER TABLE `marketmonitoring`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
