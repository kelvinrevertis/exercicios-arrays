class Program{
    static void Main(string[] args){
        try{
            Console.WriteLine("Hello");
        }
        catch(ArgumentNullException){
            Console.WriteLine("A");
        }
        catch(Exception){
            Console.WriteLine("B");
        }
        finally{
            Console.WriteLine("C");
        }
        Console.ReadKey();
    }
}