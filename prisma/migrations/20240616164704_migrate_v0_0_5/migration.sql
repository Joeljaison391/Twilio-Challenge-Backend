/*
  Warnings:

  - You are about to drop the column `DailyCalories` on the `PredefinedNutritionGoal` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `PredefinedNutritionGoal` table. All the data in the column will be lost.
  - Added the required column `dailyCalories` to the `PredefinedNutritionGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `PredefinedNutritionGoal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PredefinedNutritionGoal" DROP COLUMN "DailyCalories",
DROP COLUMN "Type",
ADD COLUMN     "dailyCalories" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
