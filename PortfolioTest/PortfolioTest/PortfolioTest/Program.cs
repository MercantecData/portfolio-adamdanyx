using System;

namespace PortfolioTest
{
    class Program
    {
        static void Main(string[] args)
        {

        }

        static int[] CountUpTo(int n)
        {
            int arraySize = n + 1;
            int[] a = new int[arraySize];
            int i = 0;
            while(i < n)
            {
                a[i] = i + 1;
                i += 1;
            }

            return a;
        }
    }
}
