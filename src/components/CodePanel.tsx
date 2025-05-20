import React, { useState } from 'react';
import { File, FolderTree } from 'lucide-react';

interface CodePanelProps {
  technologies: string[];
}

export const CodePanel: React.FC<CodePanelProps> = ({ technologies }) => {
  const [activeTab, setActiveTab] = useState('code');
  const [activeFile, setActiveFile] = useState('App.js');

  const getTechStack = () => {
    if (technologies.includes('mern')) {
      return 'MERN Stack (MongoDB, Express, React, Node.js)';
    } else if (technologies.includes('mean')) {
      return 'MEAN Stack (MongoDB, Express, Angular, Node.js)';
    } else if (technologies.includes('react')) {
      return 'React';
    } else if (technologies.includes('laravel')) {
      return 'Laravel';
    } else if (technologies.includes('php')) {
      return 'PHP';
    } else {
      return 'JavaScript';
    }
  };

  const getCodeSample = () => {
    if (technologies.includes('react')) {
      return `import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
      <Header />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <Hero />
          <Features />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;`;
    } else if (technologies.includes('php') || technologies.includes('laravel')) {
      return `<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::latest()->paginate(10);
        
        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new product.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('products.create');
    }

    /**
     * Store a newly created product in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'required',
        ]);
        
        Product::create($request->all());
        
        return redirect()->route('products.index')
                        ->with('success','Product created successfully.');
    }
}`;
    } else {
      return `// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the application
  initApp();
  
  // Set up event listeners
  setupEventListeners();
});

function initApp() {
  console.log('Application initialized');
  
  // Load user data if available
  const userData = localStorage.getItem('userData');
  if (userData) {
    const user = JSON.parse(userData);
    displayWelcomeMessage(user.name);
  } else {
    showLoginForm();
  }
  
  // Initialize UI components
  initializeComponents();
}

function setupEventListeners() {
  // Form submission
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      submitContactForm();
    });
  }
  
  // Navigation toggle for mobile
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
}`;
    }
  };

  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="flex border-b border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2 text-sm ${
            activeTab === 'code'
              ? 'bg-slate-100 dark:bg-slate-700 border-b-2 border-blue-500'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
          }`}
        >
          <File className="h-4 w-4 inline mr-1" />
          Code
        </button>
        <button
          onClick={() => setActiveTab('fileStructure')}
          className={`px-4 py-2 text-sm ${
            activeTab === 'fileStructure'
              ? 'bg-slate-100 dark:bg-slate-700 border-b-2 border-blue-500'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
          }`}
        >
          <FolderTree className="h-4 w-4 inline mr-1" />
          File Structure
        </button>
      </div>
      
      {activeTab === 'code' ? (
        <div className="p-4">
          <div className="mb-4">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Generated using: <span className="font-medium text-slate-700 dark:text-slate-300">{getTechStack()}</span>
            </div>
            <div className="flex space-x-2 overflow-x-auto py-1">
              <button
                onClick={() => setActiveFile('App.js')}
                className={`px-3 py-1 text-xs rounded-full ${
                  activeFile === 'App.js'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                App.js
              </button>
              <button
                onClick={() => setActiveFile('styles.css')}
                className={`px-3 py-1 text-xs rounded-full ${
                  activeFile === 'styles.css'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                styles.css
              </button>
              <button
                onClick={() => setActiveFile('index.html')}
                className={`px-3 py-1 text-xs rounded-full ${
                  activeFile === 'index.html'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                index.html
              </button>
            </div>
          </div>
          <pre className="bg-slate-50 dark:bg-slate-900 p-4 rounded overflow-auto text-sm max-h-80">
            <code>{getCodeSample()}</code>
          </pre>
        </div>
      ) : (
        <div className="p-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FolderTree className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>project-root/</span>
            </li>
            <li className="flex items-center pl-4">
              <FolderTree className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>src/</span>
            </li>
            <li className="flex items-center pl-8">
              <FolderTree className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>components/</span>
            </li>
            <li className="flex items-center pl-12">
              <File className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>Header.{technologies.includes('react') ? 'jsx' : 'js'}</span>
            </li>
            <li className="flex items-center pl-12">
              <File className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>Footer.{technologies.includes('react') ? 'jsx' : 'js'}</span>
            </li>
            <li className="flex items-center pl-8">
              <File className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>App.{technologies.includes('react') ? 'jsx' : 'js'}</span>
            </li>
            <li className="flex items-center pl-8">
              <File className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>index.{technologies.includes('react') ? 'jsx' : 'js'}</span>
            </li>
            <li className="flex items-center pl-4">
              <FolderTree className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>assets/</span>
            </li>
            <li className="flex items-center pl-8">
              <FolderTree className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>images/</span>
            </li>
            <li className="flex items-center pl-8">
              <FolderTree className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>styles/</span>
            </li>
            <li className="flex items-center pl-4">
              <File className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>package.json</span>
            </li>
            <li className="flex items-center pl-4">
              <File className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
              <span>README.md</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};