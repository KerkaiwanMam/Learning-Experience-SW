package Assigment;
import java.util.Scanner;

public class DateConverter {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter day month year : ");
        String input = scanner.nextLine().trim();
        String[] parts = input.split("\\s+"); 

        int day = Integer.parseInt(parts[0]);
        String month = parts[1];
        int yearAD = Integer.parseInt(parts[2]);

        int monthNumber = 0;
        if (month.equals("January")) monthNumber = 1;
        else if (month.equals("February")) monthNumber = 2;
        else if (month.equals("March")) monthNumber = 3;
        else if (month.equals("April")) monthNumber = 4;
        else if (month.equals("May")) monthNumber = 5;
        else if (month.equals("June")) monthNumber = 6;
        else if (month.equals("July")) monthNumber = 7;
        else if (month.equals("August")) monthNumber = 8;
        else if (month.equals("September")) monthNumber = 9;
        else if (month.equals("October")) monthNumber = 10;
        else if (month.equals("November")) monthNumber = 11;
        else if (month.equals("December")) monthNumber = 12;

        int yearBE = yearAD + 543;

        System.out.printf("%02d/%02d/%d\n", monthNumber, day, yearBE);
    }
}
