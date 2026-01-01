'use client';

import { useState } from 'react';

interface Props {
  projectData: any;
  setProjectData: (data: any) => void;
}

export default function YouTubeUploader({ projectData, setProjectData }: Props) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [metadata, setMetadata] = useState({
    title: '',
    description: '',
    tags: '',
    category: 'Entertainment',
    visibility: 'public',
    thumbnail: '',
    scheduleDate: '',
  });
  const [generatedMetadata, setGeneratedMetadata] = useState<any>(null);

  const generateMetadata = () => {
    if (!projectData.video) {
      alert('Please complete video production first');
      return;
    }

    const topic = projectData.selectedTopic;
    const script = projectData.script;

    const generated = {
      titles: [
        `${topic.title} | True Crime Documentary`,
        `The Dark Truth Behind ${topic.title.split(':')[0]}`,
        `UNSOLVED: ${topic.title}`,
        `What Really Happened? ${topic.title}`,
      ],
      description: `🔍 Join us as we investigate one of the most mysterious cases in criminal history.

${topic.description}

In this documentary-style investigation, we explore:
• The timeline of events
• Key evidence and theories
• Expert analysis and insights
• What really might have happened

📋 CHAPTERS:
0:00 - Introduction
0:30 - The Background
2:30 - The Discovery
4:30 - Investigation Details
7:00 - Theories & Analysis
9:00 - Conclusion

🎬 Subscribe for more mystery and true crime documentaries
🔔 Turn on notifications to never miss an investigation

#TrueCrime #Mystery #Documentary #ColdCase #UnsolvedMystery #CrimeInvestigation

⚠️ DISCLAIMER: This video is for educational and entertainment purposes. All information presented has been researched from public sources. We respect all individuals involved and aim to bring awareness to these cases.

© 2026 Mystery & Crime Automation - All Rights Reserved`,
      tags: [
        'true crime',
        'mystery',
        'documentary',
        'unsolved mystery',
        'cold case',
        'crime investigation',
        'dark web',
        'serial killer',
        'forensic',
        'crime documentary',
        'mystery documentary',
        'real crime',
        'investigation',
        'detective',
        'criminal psychology',
      ],
      thumbnailConcepts: [
        '🎨 Dark silhouette with red text overlay',
        '🎨 Crime scene tape with mysterious figure',
        '🎨 Split screen: evidence + dark background',
        '🎨 Glowing red question mark over dark scene',
      ],
    };

    setGeneratedMetadata(generated);
    setMetadata({
      ...metadata,
      title: generated.titles[0],
      description: generated.description,
      tags: generated.tags.join(', '),
    });
  };

  const uploadToYouTube = async () => {
    if (!projectData.video) {
      alert('Please complete video production first');
      return;
    }

    if (!metadata.title || !metadata.description) {
      alert('Please generate or enter metadata first');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressSteps = [
      { stage: 'Preparing video...', progress: 10 },
      { stage: 'Uploading to YouTube...', progress: 30 },
      { stage: 'Processing video...', progress: 60 },
      { stage: 'Generating thumbnail...', progress: 80 },
      { stage: 'Setting metadata...', progress: 90 },
      { stage: 'Finalizing...', progress: 100 },
    ];

    for (const step of progressSteps) {
      setUploadProgress(step.progress);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    setUploadComplete(true);
    setIsUploading(false);

    const uploadData = {
      videoId: 'YT_' + Math.random().toString(36).substr(2, 11),
      url: 'https://youtube.com/watch?v=' + Math.random().toString(36).substr(2, 11),
      uploadDate: new Date().toISOString(),
      status: 'Published',
      visibility: metadata.visibility,
    };

    setProjectData({ ...projectData, youtubeData: uploadData });
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-2">YouTube Upload & Publishing</h2>
        <p className="text-gray-400">
          Automated metadata generation and seamless YouTube publishing
        </p>
      </div>

      {!projectData.video ? (
        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-6">
          <p className="text-yellow-400">⚠️ Please complete video production first from the Production tab</p>
        </div>
      ) : (
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Video Ready for Upload</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4">
            <div>
              <span className="text-gray-400">Duration:</span>
              <span className="text-white ml-2">{projectData.video.duration}</span>
            </div>
            <div>
              <span className="text-gray-400">Resolution:</span>
              <span className="text-white ml-2">{projectData.video.resolution}</span>
            </div>
            <div>
              <span className="text-gray-400">Size:</span>
              <span className="text-white ml-2">{projectData.video.fileSize}</span>
            </div>
            <div>
              <span className="text-gray-400">Format:</span>
              <span className="text-white ml-2">{projectData.video.format}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={generateMetadata}
          disabled={!projectData.video}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 disabled:cursor-not-allowed"
        >
          ✨ Generate AI Metadata
        </button>
      </div>

      {generatedMetadata && (
        <div className="space-y-6">
          <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Generated Title Options</h3>
            <div className="space-y-2">
              {generatedMetadata.titles.map((title: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setMetadata({ ...metadata, title })}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    metadata.title === title
                      ? 'bg-red-900/30 border-2 border-red-600'
                      : 'bg-black/30 border border-gray-700 hover:border-red-800/50'
                  }`}
                >
                  <span className={metadata.title === title ? 'text-white font-medium' : 'text-gray-300'}>
                    {title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Video Metadata</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={metadata.title}
                  onChange={(e) => setMetadata({ ...metadata, title: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                  maxLength={100}
                />
                <p className="text-xs text-gray-400 mt-1">{metadata.title.length}/100 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  value={metadata.description}
                  onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600 h-48"
                  maxLength={5000}
                />
                <p className="text-xs text-gray-400 mt-1">{metadata.description.length}/5000 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
                <textarea
                  value={metadata.tags}
                  onChange={(e) => setMetadata({ ...metadata, tags: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600 h-24"
                  placeholder="Separate tags with commas"
                />
                <p className="text-xs text-gray-400 mt-1">
                  {metadata.tags.split(',').filter(t => t.trim()).length} tags
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={metadata.category}
                    onChange={(e) => setMetadata({ ...metadata, category: e.target.value })}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                  >
                    <option value="Entertainment">Entertainment</option>
                    <option value="Education">Education</option>
                    <option value="News">News & Politics</option>
                    <option value="Documentary">Documentary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Visibility</label>
                  <select
                    value={metadata.visibility}
                    onChange={(e) => setMetadata({ ...metadata, visibility: e.target.value })}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                  >
                    <option value="public">Public</option>
                    <option value="unlisted">Unlisted</option>
                    <option value="private">Private</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Thumbnail Concepts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {generatedMetadata.thumbnailConcepts.map((concept: string, idx: number) => (
                <div key={idx} className="bg-black/30 border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">{concept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isUploading && (
        <div className="bg-gray-900/40 border border-blue-800/50 rounded-xl p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">Uploading to YouTube...</span>
              <span className="text-blue-400">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-500 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {!uploadComplete && generatedMetadata && (
        <div className="flex justify-center">
          <button
            onClick={uploadToYouTube}
            disabled={isUploading || !metadata.title}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold rounded-xl shadow-lg shadow-red-900/30 transition-all duration-200 disabled:cursor-not-allowed"
          >
            {isUploading ? '📤 Uploading...' : '🚀 Upload to YouTube'}
          </button>
        </div>
      )}

      {uploadComplete && (
        <div className="bg-gradient-to-r from-green-900/20 to-gray-900/20 border border-green-800/30 rounded-xl p-6">
          <div className="text-center space-y-4">
            <div className="text-6xl">✅</div>
            <h3 className="text-2xl font-bold text-white">Upload Complete!</h3>
            <p className="text-gray-400">Your video has been successfully published to YouTube</p>

            <div className="bg-black/30 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="space-y-2 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Video ID:</span>
                  <span className="text-white font-mono">{projectData.youtubeData?.videoId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400">{projectData.youtubeData?.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Visibility:</span>
                  <span className="text-white capitalize">{projectData.youtubeData?.visibility}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                🎥 View on YouTube
              </button>
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                📊 View Analytics
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
