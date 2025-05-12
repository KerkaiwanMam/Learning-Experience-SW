package Assigment;
import java.util.Scanner;

public class TextMasking {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Target : ");
        String target = scanner.nextLine();
        System.out.print("Enter Mask : ");
        String mask = scanner.nextLine();

        int maxLength = Math.max(target.length(), mask.length());
        target = String.format("%-" + maxLength + "s", target);
        mask = String.format("%-" + maxLength + "s", mask);

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < maxLength; i++) {
            char t = target.charAt(i);
            char m = mask.charAt(i);

            if (Character.isUpperCase(t) && Character.isUpperCase(m)) {
                result.append(t); 
            } else if (Character.isLowerCase(t) && Character.isLowerCase(m)) {
                result.append(m); 
            } else if ((Character.isUpperCase(t) && Character.isLowerCase(m)) ||
                       (Character.isLowerCase(t) && Character.isUpperCase(m))) {
                result.append('$');
            } else {
                result.append('#');
            }
        }

        System.out.println("Result : " + result.toString());
    }
}
