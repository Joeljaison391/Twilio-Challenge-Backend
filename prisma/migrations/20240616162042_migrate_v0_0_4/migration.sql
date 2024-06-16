/*
  Warnings:

  - You are about to alter the column `targetValue` on the `PredefinedNutritionGoal` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `DailyCalories` to the `PredefinedNutritionGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Type` to the `PredefinedNutritionGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mealType` to the `PredefinedNutritionGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recommendedDailyMeals` to the `PredefinedNutritionGoal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PredefinedNutritionGoal" ADD COLUMN     "DailyCalories" INTEGER NOT NULL,
ADD COLUMN     "Type" TEXT NOT NULL,
ADD COLUMN     "mealTimes" TEXT[],
ADD COLUMN     "mealType" TEXT NOT NULL,
ADD COLUMN     "recommendedDailyMeals" INTEGER NOT NULL,
ALTER COLUMN "targetValue" SET DATA TYPE INTEGER;
