'use client';

import { useState } from 'react';

interface Props {
  projectData: any;
  setProjectData: (data: any) => void;
}

export default function TopicResearch({ projectData, setProjectData }: Props) {
  const [isResearching, setIsResearching] = useState(false);
  const [topics, setTopics] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    category: 'all',
    language: 'english',
    difficulty: 'medium',
  });

  const topicCategories = [
    { id: 'unsolved-murders', name: 'Unsolved Murders', icon: '🔪' },
    { id: 'dark-web', name: 'Dark Web Mysteries', icon: '🕸️' },
    { id: 'serial-killers', name: 'Serial Killers', icon: '💀' },
    { id: 'real-crime', name: 'Real Crime Cases', icon: '⚖️' },
    { id: 'abandoned-places', name: 'Abandoned Places', icon: '🏚️' },
    { id: 'psychological', name: 'Psychological Crimes', icon: '🧠' },
    { id: 'conspiracies', name: 'Government Conspiracies', icon: '🎭' },
    { id: 'forensics', name: 'Forensic Mysteries', icon: '🔬' },
  ];

  const researchTopics = async () => {
    setIsResearching(true);

    // Simulate API research
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockTopics = [
      {
        id: 1,
        title: 'The Disappearance at Devil\'s Hollow: A 50-Year Mystery',
        category: 'unsolved-murders',
        searchVolume: 125000,
        competition: 'Medium',
        viralScore: 8.7,
        engagement: 'High',
        description: 'An entire family vanished without a trace in 1974. No bodies, no suspects, just silence.',
        keywords: ['missing persons', 'cold case', 'unsolved mystery', '1970s crime'],
        estimatedViews: '250K-500K',
      },
      {
        id: 2,
        title: 'The Cipher Killer: Decoded Messages From The Dead',
        category: 'serial-killers',
        searchVolume: 180000,
        competition: 'High',
        viralScore: 9.2,
        engagement: 'Very High',
        description: 'A serial killer who left encrypted messages at crime scenes. One message remains unsolved.',
        keywords: ['zodiac killer', 'ciphers', 'cryptography', 'serial killer'],
        estimatedViews: '500K-1M',
      },
      {
        id: 3,
        title: 'Inside Room 303: The Hotel Nobody Checks Out Of',
        category: 'abandoned-places',
        searchVolume: 95000,
        competition: 'Low',
        viralScore: 7.8,
        engagement: 'Medium',
        description: 'Guests who checked into room 303 were never seen again. The hotel closed in 1985.',
        keywords: ['haunted hotels', 'mysterious disappearances', 'urban legends'],
        estimatedViews: '150K-300K',
      },
      {
        id: 4,
        title: 'The Dark Web Hitman Conspiracy: Was It Real?',
        category: 'dark-web',
        searchVolume: 210000,
        competition: 'High',
        viralScore: 9.5,
        engagement: 'Very High',
        description: 'A deep dive into the infamous dark web murder-for-hire sites and whether they were FBI stings.',
        keywords: ['dark web', 'silk road', 'cybercrime', 'FBI investigation'],
        estimatedViews: '600K-1.2M',
      },
      {
        id: 5,
        title: 'The Mind Hunter\'s Last Case: Why Did He Stop?',
        category: 'psychological',
        searchVolume: 140000,
        competition: 'Medium',
        viralScore: 8.4,
        engagement: 'High',
        description: 'The legendary FBI profiler solved 37 cases, then vanished. What did he discover?',
        keywords: ['FBI profiling', 'criminal psychology', 'behavioral analysis'],
        estimatedViews: '300K-600K',
      },
    ];

    setTopics(mockTopics);
    setIsResearching(false);
  };

  const selectTopic = (topic: any) => {
    setProjectData({ ...projectData, selectedTopic: topic });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-2">Topic Research Engine</h2>
        <p className="text-gray-400">
          AI-powered research to find viral mystery and crime topics with high retention potential
        </p>
      </div>

      {/* Filters */}
      <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Research Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
            <select
              value={filters.language}
              onChange={(e) => setFilters({ ...filters, language: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="hinglish">Hinglish</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              <option value="easy">Easy (Well-documented)</option>
              <option value="medium">Medium (Balanced)</option>
              <option value="hard">Hard (Deep Research)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {topicCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topicCategories.map((category) => (
          <button
            key={category.id}
            className="bg-gray-900/40 hover:bg-red-900/20 border border-gray-800/50 hover:border-red-800/50 rounded-xl p-4 transition-all duration-200 group"
          >
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <div className="text-white font-medium text-sm">{category.name}</div>
          </button>
        ))}
      </div>

      {/* Research Button */}
      <div className="flex justify-center">
        <button
          onClick={researchTopics}
          disabled={isResearching}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold rounded-xl shadow-lg shadow-red-900/30 transition-all duration-200 disabled:cursor-not-allowed"
        >
          {isResearching ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Researching Topics...</span>
            </span>
          ) : (
            '🔍 Start AI Research'
          )}
        </button>
      </div>

      {/* Topics Results */}
      {topics.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Research Results</h3>
          {topics.map((topic) => (
            <div
              key={topic.id}
              className={`bg-gray-900/40 border rounded-xl p-6 transition-all duration-200 hover:border-red-800/50 ${
                projectData.selectedTopic?.id === topic.id
                  ? 'border-red-600 shadow-lg shadow-red-900/30'
                  : 'border-gray-800/50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{topic.title}</h4>
                  <p className="text-gray-400 mb-4">{topic.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.keywords.map((keyword: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-900/20 border border-red-800/30 text-red-400 text-xs rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => selectTopic(topic)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    projectData.selectedTopic?.id === topic.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-red-900/30'
                  }`}
                >
                  {projectData.selectedTopic?.id === topic.id ? '✓ Selected' : 'Select'}
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-gray-400 mb-1">Search Volume</div>
                  <div className="text-white font-semibold">{topic.searchVolume.toLocaleString()}</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-gray-400 mb-1">Competition</div>
                  <div className="text-white font-semibold">{topic.competition}</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-gray-400 mb-1">Viral Score</div>
                  <div className="text-white font-semibold">{topic.viralScore}/10</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-gray-400 mb-1">Engagement</div>
                  <div className="text-white font-semibold">{topic.engagement}</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-gray-400 mb-1">Est. Views</div>
                  <div className="text-white font-semibold">{topic.estimatedViews}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
