import { Card } from "@/components/Card";
import { Pic } from "@/components/Pic";

import Fig1 from "@/assets/fig_1.png";
import Fig2 from "@/assets/fig_2.png";
import Fig3 from "@/assets/fig_3.png";

export function Content() {
  return (
    <div className="flex flex-col overflow-y-auto grow m-2">
      <Card
        border="broder"
        borderColor="border-gray-100"
        backgroundColor="bg-white"
      >
        I bet you <span className="font-semibold">100</span> that if I mention{" "}
        <span className="text-duck-red">Assignment</span> in Python, the first
        thing that comes to your mind is something like the following:{" "}
        <span className="text-duck-green font-semibold bg-slate-50 p-1 m-2">
          some_var_name = some_val
        </span>{" "}
        <br></br>
        <br></br>
        If that is not the case, congratulations! you have earned{" "}
        <span className="font-semibold">100</span> self-esteem points! Now, if
        you thought of something similar to what I suggested, well, you get the
        consolation prize, you are correct! But, being right, barely scratches
        the surface of what an <span className="text-duck-red">Assignment</span>{" "}
        entails in Python.
        <br></br>
        <br></br>
        Let's explore what's under that surface, for that, let's start from
        where all coding work ends .. being executed, oops! The following is a
        bird’s eye view of the environment where a Python script runs, also
        known as the <span className="font-semibold">runtime</span>:
      </Card>
      <Pic src={Fig1} text="Fig. 1"></Pic>
      <Card
        border="border-2"
        borderColor="border-gray-300"
        backgroundColor="bg-yellow-50"
      >
        If you want to explore the <span className="font-semibold">Fig. 1</span>{" "}
        in more detail, I suggest the article{" "}
        <span className="font-semibold text-duck-blue">
          Coding for the Code Interpreter
        </span>{" "}
        of the series{" "}
        <span className="font-semibold text-duck-blue">
          The Python hidden in plain sight
        </span>
        .
      </Card>
      <Card
        border="broder"
        borderColor="border-gray-100"
        backgroundColor="bg-white"
      >
        For now, let's concentrate on the basics of the{" "}
        <span className="font-semibold">Fig. 1</span>. Our Python script is
        being executed by the Python{" "}
        <span className="font-semibold">Interpreter</span>, which is itself a C
        program that runs on a <span className="font-semibold">Process</span>{" "}
        from the Operating System. And within that Process, the Interpreter runs
        on a <span className="font-semibold">Thread</span> launched by that
        Process. There is usually only one Thread, the{" "}
        <span className="font-semibold">Main</span> one. The Interpreter
        executes our Python script inside this Main thread in a structure that
        is known as the <span className="font-semibold">Stack</span>.
      </Card>
      <Card
        border="border-2"
        borderColor="border-gray-300"
        backgroundColor="bg-yellow-50"
      >
        If you want to explore the <span className="font-semibold">Stack</span>,
        and the <span className="font-semibold">Heap</span>, in more detail, I
        suggest the following riddle;{" "}
        <span className="font-semibold text-duck-blue">
          The Stack of code manipulating the Heap
        </span>{" "}
        of the series{" "}
        <span className="font-semibold text-duck-blue">
          The Python hidden in plain sight
        </span>
        .
      </Card>
      <Card
        border="broder"
        borderColor="border-gray-100"
        backgroundColor="bg-white"
      >
        Let's put the magnifying glass on that{" "}
        <span className="font-semibold">Stack</span> and examine it in a little
        more detail:
      </Card>
      <Pic src={Fig2} text="Fig. 2"></Pic>
      <Card
        border="broder"
        borderColor="border-gray-100"
        backgroundColor="bg-white"
      >
        The important thing here, is that each{" "}
        <span className="font-semibold">block of code</span> being executed by
        the Interpreter at a given time, that is, the{" "}
        <span className="font-semibold">body</span> of the script itself, and
        the <span className="font-semibold">body</span> of a function or class
        being called by the script, has its own{" "}
        <span className="font-semibold">box</span> on the Stack. That box is
        known as a <span className="font-semibold">Frame</span>, and among other
        things, it stores the variables, which includes the arguments, defined
        in that body.
        <br></br>
        <br></br>
        In <span className="font-semibold">Fig 2</span>, for example, we can see
        that the Frame corresponding to the body defined by the{" "}
        <span className="text-duck-green font-semibold bg-slate-50 p-1 m-2">
          callee
        </span>{" "}
        function is storing the variable{" "}
        <span className="text-duck-green font-semibold bg-slate-50 p-1 m-2">
          li
        </span>
        , and that the Frame corresponding to the body defined by the{" "}
        <span className="font-semibold">script</span> itself, is storing the
        variable{" "}
        <span className="text-duck-green font-semibold bg-slate-50 p-1 m-2">
          en
        </span>
        .<br></br>
        <br></br>
        In a Frame, each variable has its{" "}
        <span className="font-semibold">own compartment</span>. But if we look
        more closely, the compartment does not store the value assigned to the
        variable. Instead, the value is being stored in another big box known as
        the <span className="font-semibold">Heap</span>, and it is being used,
        shared, by all the Threads that the Interpreter may be using, usually
        only the Main one.
        <br></br>
        <br></br>
        So, what does a <span className="font-semibold">
          Python variable
        </span>{" "}
        actually store? A Python variable does not store the value assigned to
        it, but stores a <span className="font-semibold">reference</span> to
        that value. This reference, the{" "}
        <span className="font-semibold">red arrow</span> in the{" "}
        <span className="font-semibold">Fig 2</span>, is the{" "}
        <span className="font-semibold">address</span> that indicates where in
        the <span className="font-semibold">Heap</span> the value is stored.
        <br></br>
        <br></br>
        Therefore, any variable in Python is what is known in other languages as
        a <span className="font-semibold">Pointer</span>. It is a 'big red
        arrow' pointing to the exact place in the Heap where the value is
        actually stored. When a variable is pointing to a value in the Heap, it
        is said to be <span className="font-semibold">bound</span> to that
        value.
        <br></br>
        <br></br>
        Remember that the Interpreter executes the script code on the Stack, and
        that all code is really nothing other than the manipulation of values,
        i.e. <span className="font-semibold">data</span>. But, the values are
        stored in the Heap, therefore, Python must provide for us, programmers,
        with some <span className="font-semibold">tool</span> that allows us to
        create, access and manipulate values in the Heap.
        <br></br>
        <br></br>
        That tool is a very powerful magic, known since ancient times, the power
        of <span className="font-semibold">giving a name</span>. By giving a
        name what we actually do is conjure something in existence, or we invoke
        it if it already exists, and then we can manipulate it through that
        name. When the Interpreter sees a name, it knows that we are doing
        magic, we are conjuring something in existence on the Heap, and/or we
        are summoning something from the Heap to manipulate it. The{" "}
        <span className="font-semibold">names</span>, the{" "}
        <span className="font-semibold">symbols</span> as the Interpreter knows
        them, that we as programmers give and use when we code, is the{" "}
        <span className="font-semibold">ultimate tool</span> that Python
        provides us.
        <br></br>
        <br></br>
        One way to give a name is by defining a variable. But, it is not the
        only one, there are many other ways in which we give a name. For
        example, when we define a function, unless it is anonymous, we give it a
        name explicitly, when we define a class, we give it a name, when we are
        iterating in a for loop, we do it by giving a name, or when we want to
        use a built-in function, we summon it by the name it was given in the
        Standard Library.
        <br></br>
        <br></br>
        <span className="font-semibold">Any name in Python</span> is a spell,
        also known as a <span className="font-semibold">pointer</span>, that
        commands the Interpreter to access the arcane realm of the Heap to
        manipulate values there. Of these names, the variables are a particular
        variety of spells, that we, as a programmers, define to explicitly
        create, access and manipulate values in the Heap. And those values
        stored in the Heap are the real protagonists in Python.
        <br></br>
        <br></br>
        When a value is stored to the Heap, it is stored using a special
        structure known as the{" "}
        <span className="font-semibold">Python Object</span>. This Python Object
        has four key attributes. The first is its{" "}
        <span className="font-semibold">address</span>, that is, the precise
        place in the Heap where it is stored. The second attribute is the{" "}
        <span className="font-semibold">type</span> of the value it is holding,
        for example an integer is not the same as a string, they are different
        data types, and that must be made known to the Interpreter, since they
        are manipulated differently. The third is a{" "}
        <span className="font-semibold">reference counter</span>, i.e. the
        number of names that are bound, i.e. that are pointing, to that object,
        and that is vital for the operation of the Garbage Collector. Finally,
        the fourth attribute, is the{" "}
        <span className="font-semibold">value itself</span>.<br></br>
        <br></br>
      </Card>
      <Pic src={Fig3} text="Fig. 3"></Pic>
      <Card
        border="border-2"
        borderColor="border-gray-300"
        backgroundColor="bg-yellow-50"
      >
        If you want to explore in more detail the Python object, the Garbage
        Collector, the immortals, and why everything in Python is said to be an
        object, I recommend the{" "}
        <span className="font-semibold text-duck-blue">
          The Duck Typing with dynamism
        </span>
        , from the{" "}
        <span className="font-semibold text-duck-blue">
          Python hidden in plain sight
        </span>{" "}
        series.
      </Card>
      <Card
        border="broder"
        borderColor="border-gray-100"
        backgroundColor="bg-white"
      >
        And finally, after as many detours as the body of a Python, we finally
        get back to <span className="text-duck-red">Assignments</span>. What is
        an <span className="text-duck-red">Assignment </span> in Python? Well,
        in a nutshell, that's what detours are for, it is the way to channel the
        magic in Python, an <span className="text-duck-red">Assignment</span> is
        what allows us to give a name and conjure into existence, or invoke if
        it already exists, a value in the Heap. A more technical way of putting
        it, an <span className="text-duck-red">Assignment</span> is the
        operation that allows us to <span className="font-semibold">bind</span>,
        or <span className="font-semibold">rebind</span>, a{" "}
        <span className="font-semibold">name</span> to a{" "}
        <span className="font-semibold">value</span> in the{" "}
        <span className="font-semibold">Heap</span>.<br></br>
        <br></br>
        The <span className="text-duck-red">Assignment</span>, as happens in any
        magic system, can take many forms, and according to the forms have
        effects at first sight surprising, but that are nothing more than a
        consequence, simple and direct, of the action of{" "}
        <span className="font-semibold">binding</span>, or{" "}
        <span className="font-semibold">rebinding</span>, a{" "}
        <span className="font-semibold">name</span> to a{" "}
        <span className="font-semibold">value</span> in the{" "}
        <span className="font-semibold">Heap</span>. In the{" "}
        <span className="font-semibold text-duck-blue">Part two</span> of this
        article we will explore those forms and their effects, just like the
        delicious, although a little acidic the first few times, mutable default
        argument in a function. See you soon!
      </Card>
    </div>
  );
}
