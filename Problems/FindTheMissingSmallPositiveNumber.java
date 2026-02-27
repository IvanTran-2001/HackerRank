import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindTheMissingSmallPositiveNumber {
    public static int findSmallestMissingPositive(List<Integer> orderNumbers) {
        if (orderNumbers.isEmpty()) {
            return 1;
        }

        int len = orderNumbers.size();

        for (int i = 0; i < len; i++) {
            while (true) {
                int val = orderNumbers.get(i);

                if (!(val > 0 && val <= len && val != orderNumbers.get(val - 1))) {
                    break;
                }

                int tmp = orderNumbers.get(val - 1);
                orderNumbers.set(val - 1, val);
                orderNumbers.set(i, tmp);
            }
        }

        for (int i = 0; i < len; i++) {
            if (orderNumbers.get(i) != i + 1) {
                return i + 1;
            }
        }

        return len + 1;
    }

    public static void main(String[] args) {
        System.out.println(findSmallestMissingPositive(new ArrayList<>(Arrays.asList(-3,-2,-1,0,1,-4)))); // expected 1
        System.out.println(findSmallestMissingPositive(new ArrayList<>(Arrays.asList(2, 2, 1)))); // expected 3
        System.out.println(findSmallestMissingPositive(new ArrayList<>(Arrays.asList(3, 4, -1, 1)))); // expected 2
        System.out.println(findSmallestMissingPositive(new ArrayList<>(Arrays.asList(7, 8, 9, 11)))); // expected 1
    }
}
