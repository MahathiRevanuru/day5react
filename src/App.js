import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<p><b>1.High Order Component in react js ?</b></p>
<p>A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
Concretely, a higher-order component is a function that takes a component and returns a new component.
const EnhancedComponent = higherOrderComponent(WrappedComponent);</p>
<p><b>2.Do you know about SEO ? Is it true that react js supports SEO support</b></p>
<p>React is a Javascript-framework (even though some people would rather call it a a library) that can be used for building the user interface of a site. 
  It makes it simple to build interactive websites and apps that feel fast. 
  React enables you to for example achieve that “app feeling” of navigating between pages without a reload which increases the user experience.
React gives you a SPA (Single Page Application) which requires Javascript to show the content on the page. 
The problem is that the Google crawl bot, that scans all the pages on the internet, isn’t as good as understanding a page with javascript compared with a page that consists of regular HTML-code.
For a long while Google couldn’t at all see the content that was rendered with Javascript and they used to recommend that the content could be viewed without Javascript enabled. 
But a couple of years ago Google announced that their crawl bot can now renderer pages with Javascript and index them.</p>
<p><b>3.clean up in useEffect</b></p>
<p>Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts.
   When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. 
The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.
<b>use:</b>
As stated previously, the useEffect cleanup function helps developers clean effects that prevent unwanted behaviors and optimizes application performance.
However, it is pertinent to note that the useEffect cleanup function does not only run when our component wants to unmount, it also runs right before the execution of the next scheduled effect.
In fact, after our effect executes, the next scheduled effect is usually based on the dependency(array):
</p>
<p><b>4.What is the use of useCallback and useMemo</b></p>
<p>Fundamentally, useMemo and useCallback are tools built to help us optimize re-renders. They do this in two ways:
1.Reducing the amount of work that needs to be done in a given render.
2.Reducing the number of times that a component needs to re-render.
<b>usememo:</b>The React useMemo Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.
The useMemo Hook only runs when one of its dependencies update.
This can improve performance.
<b>useCallback:</b>The React useCallback Hook returns a memoized callback function.
Think of memoization as caching a value so that it does not need to be recalculated.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.
<b>similarity:</b>
The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
</p>
<p><b>5.Why do we need keys in react?</b></p>
<p>A “key” is a special string attribute you need to include when creating lists of elements in React. 
  Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists. 
  The next thing that comes to mind is that what should be good to be chosen as key for the items in lists.
   It is recommended to use a string as a key that uniquely identifies the items in the list.</p>
<p><b>6.Do you know about redux</b></p>
<p>Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test.
While it’s mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.
 It’s lightweight at 2KB (including dependencies), so you don’t have to worry about it making your application’s asset size bigger.
With Redux, the state of your application is kept in a store, and each component can access any state that it needs from this store.</p>
    </div>
  );
}

export default App;
