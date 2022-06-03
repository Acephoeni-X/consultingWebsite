/*
  Warnings:

  - You are about to drop the `Query` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Query` DROP FOREIGN KEY `Query_userId_fkey`;

-- DropTable
DROP TABLE `Query`;

-- CreateTable
CREATE TABLE `Queries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `subject` VARCHAR(50) NOT NULL,
    `body` VARCHAR(500) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Queries` ADD CONSTRAINT `Queries_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
