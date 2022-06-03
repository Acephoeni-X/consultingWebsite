/*
  Warnings:

  - You are about to drop the column `body` on the `Queries` table. All the data in the column will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `Queries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Queries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Queries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Queries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Queries` DROP FOREIGN KEY `Queries_userId_fkey`;

-- AlterTable
ALTER TABLE `Queries` DROP COLUMN `body`,
    ADD COLUMN `email` CHAR(100) NOT NULL,
    ADD COLUMN `message` VARCHAR(500) NOT NULL,
    ADD COLUMN `name` CHAR(100) NOT NULL,
    ADD COLUMN `phoneNumber` CHAR(15) NOT NULL;

-- DropTable
DROP TABLE `Users`;
