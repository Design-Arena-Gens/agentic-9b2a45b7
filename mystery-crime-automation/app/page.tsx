'use client';

import { useState } from 'react';
import TopicResearch from '@/components/TopicResearch';
import ScriptGenerator from '@/components/ScriptGenerator';
import VideoProduction from '@/components/VideoProduction';
import YouTubeUploader from '@/components/YouTubeUploader';
import Analytics from '@/components/Analytics';

export default function Home() {
  const [activeTab, setActiveTab] = useState('research');
  const [projectData, setProjectData] = useState<any>({});

  const tabs = [
    { id: 'research', label: 'Topic Research', icon: '🔍' },
    { id: 'script', label: 'Script Generator', icon: '📝' },
    { id: 'production', label: 'Video Production', icon: '🎬' },
    { id: 'upload', label: 'YouTube Upload', icon: '📤' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-950">
      {/* Header */}
      <header className="border-b border-red-900/30 bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Mystery & Crime Automation</h1>
                <p className="text-sm text-gray-400">Cinematic YouTube Documentary Creator</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 bg-red-900/20 border border-red-800/30 rounded-lg">
                <span className="text-red-400 text-sm">🔴 System Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-800/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-red-600 text-white bg-red-900/10'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/30'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'research' && (
            <TopicResearch projectData={projectData} setProjectData={setProjectData} />
          )}
          {activeTab === 'script' && (
            <ScriptGenerator projectData={projectData} setProjectData={setProjectData} />
          )}
          {activeTab === 'production' && (
            <VideoProduction projectData={projectData} setProjectData={setProjectData} />
          )}
          {activeTab === 'upload' && (
            <YouTubeUploader projectData={projectData} setProjectData={setProjectData} />
          )}
          {activeTab === 'analytics' && (
            <Analytics projectData={projectData} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-black/20 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <p>© 2026 Mystery & Crime Automation - Professional Documentary Creator</p>
            <p>Built with AI-Powered Cinematic Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
