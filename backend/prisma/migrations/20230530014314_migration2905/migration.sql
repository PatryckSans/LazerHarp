/*
 Warnings:
 
 - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.
 - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
 
 */
-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_user_id_fkey`;
-- DropTable
DROP TABLE `task`;
-- DropTable
DROP TABLE `user`;
-- CreateTable
CREATE TABLE `users` (
  `id` VARCHAR(191) NOT NULL,
  `name` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `password` VARCHAR(191) NOT NULL,
  `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;