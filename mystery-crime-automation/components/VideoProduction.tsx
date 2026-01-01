'use client';

import { useState } from 'react';

interface Props {
  projectData: any;
  setProjectData: (data: any) => void;
}

export default function VideoProduction({ projectData, setProjectData }: Props) {
  const [isProducing, setIsProducing] = useState(false);
  const [productionStage, setProductionStage] = useState('');
  const [progress, setProgress] = useState(0);
  const [videoData, setVideoData] = useState<any>(null);
  const [settings, setSettings] = useState({
    voiceType: 'deep-male',
    videoQuality: '4k',
    filmGrain: true,
    vignette: true,
    musicStyle: 'cinematic-suspense',
  });

  const startProduction = async () => {
    if (!projectData.script) {
      alert('Please generate a script first');
      return;
    }

    setIsProducing(true);
    setProgress(0);

    const stages = [
      { name: 'Analyzing script structure...', duration: 1000, progress: 10 },
      { name: 'Generating AI voiceover...', duration: 2000, progress: 25 },
      { name: 'Sourcing cinematic footage...', duration: 1500, progress: 40 },
      { name: 'Applying visual effects...', duration: 2000, progress: 55 },
      { name: 'Composing background music...', duration: 1500, progress: 70 },
      { name: 'Adding sound effects...', duration: 1000, progress: 80 },
      { name: 'Rendering video segments...', duration: 2500, progress: 90 },
      { name: 'Final compilation...', duration: 1500, progress: 100 },
    ];

    for (const stage of stages) {
      setProductionStage(stage.name);
      setProgress(stage.progress);
      await new Promise(resolve => setTimeout(resolve, stage.duration));
    }

    const mockVideoData = {
      videoId: 'VID_' + Date.now(),
      title: projectData.script.title,
      duration: '10:23',
      fileSize: '1.2 GB',
      resolution: '3840x2160',
      format: 'MP4 (H.264)',
      audioChannels: '2.0 Stereo',
      bitrate: '15 Mbps',
      thumbnail: '/api/placeholder/1280/720',
      segments: [
        { id: 1, title: 'Hook', duration: '0:30', status: 'complete' },
        { id: 2, title: 'Background Setup', duration: '2:00', status: 'complete' },
        { id: 3, title: 'The Discovery', duration: '2:00', status: 'complete' },
        { id: 4, title: 'The Investigation', duration: '2:30', status: 'complete' },
        { id: 5, title: 'Theories', duration: '2:00', status: 'complete' },
        { id: 6, title: 'Closing', duration: '1:00', status: 'complete' },
      ],
      effects: {
        filmGrain: 'Applied',
        colorGrading: 'Dark Cinematic',
        vignette: 'Heavy',
        transitions: 'Smooth Fades',
        textEffects: 'Typewriter + Glitch',
      },
      audio: {
        voiceover: 'Deep Male (AI)',
        music: 'Cinematic Suspense',
        soundEffects: 15,
        mixingProfile: 'Documentary',
      },
    };

    setVideoData(mockVideoData);
    setProjectData({ ...projectData, video: mockVideoData });
    setIsProducing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-2">Cinematic Video Production</h2>
        <p className="text-gray-400">
          AI-powered video editing with professional cinematic effects and sound design
        </p>
      </div>

      {!projectData.script ? (
        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-6">
          <p className="text-yellow-400">⚠️ Please generate a script first from the Script Generator tab</p>
        </div>
      ) : (
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Script Ready</h3>
          <p className="text-gray-300">{projectData.script.title}</p>
          <p className="text-sm text-gray-400 mt-1">
            {projectData.script.sections.length} sections • {projectData.script.wordCount} words
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Voice Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Voice Type</label>
              <select
                value={settings.voiceType}
                onChange={(e) => setSettings({ ...settings, voiceType: e.target.value })}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
              >
                <option value="deep-male">Deep Male (Mysterious)</option>
                <option value="calm-male">Calm Male (Documentary)</option>
                <option value="dark-female">Dark Female (Suspenseful)</option>
                <option value="neutral-male">Neutral Male (Investigative)</option>
              </select>
            </div>
            <div className="bg-black/30 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-2">Preview:</p>
              <p className="text-sm text-gray-300 italic">"Imagine waking up one morning... and everyone you love... is gone."</p>
              <button className="mt-2 text-red-400 text-xs hover:text-red-300">🔊 Play Sample</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Video Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Quality</label>
              <select
                value={settings.videoQuality}
                onChange={(e) => setSettings({ ...settings, videoQuality: e.target.value })}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
              >
                <option value="4k">4K (3840x2160)</option>
                <option value="1080p">Full HD (1920x1080)</option>
                <option value="720p">HD (1280x720)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.filmGrain}
                  onChange={(e) => setSettings({ ...settings, filmGrain: e.target.checked })}
                  className="w-4 h-4 text-red-600 bg-black/50 border-gray-700 rounded focus:ring-red-600"
                />
                <span className="text-sm text-gray-300">Film Grain Effect</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.vignette}
                  onChange={(e) => setSettings({ ...settings, vignette: e.target.checked })}
                  className="w-4 h-4 text-red-600 bg-black/50 border-gray-700 rounded focus:ring-red-600"
                />
                <span className="text-sm text-gray-300">Vignette Effect</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Audio Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Music Style</label>
            <select
              value={settings.musicStyle}
              onChange={(e) => setSettings({ ...settings, musicStyle: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
            >
              <option value="cinematic-suspense">Cinematic Suspense</option>
              <option value="dark-ambient">Dark Ambient</option>
              <option value="horror-tension">Horror Tension</option>
              <option value="documentary-score">Documentary Score</option>
            </select>
          </div>
          <div className="bg-black/30 rounded-lg p-3">
            <p className="text-sm text-gray-300 mb-2">Sound Effects Included:</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-red-900/20 text-red-400 rounded">Heartbeat</span>
              <span className="text-xs px-2 py-1 bg-red-900/20 text-red-400 rounded">Wind</span>
              <span className="text-xs px-2 py-1 bg-red-900/20 text-red-400 rounded">Footsteps</span>
              <span className="text-xs px-2 py-1 bg-red-900/20 text-red-400 rounded">Clock Ticking</span>
              <span className="text-xs px-2 py-1 bg-red-900/20 text-red-400 rounded">Door Creaks</span>
            </div>
          </div>
        </div>
      </div>

      {isProducing && (
        <div className="bg-gray-900/40 border border-red-800/50 rounded-xl p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">{productionStage}</span>
              <span className="text-red-400">{progress}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-red-800 transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={startProduction}
          disabled={isProducing || !projectData.script}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold rounded-xl shadow-lg shadow-red-900/30 transition-all duration-200 disabled:cursor-not-allowed"
        >
          {isProducing ? '🎬 Producing Video...' : '🎥 Start Production'}
        </button>
      </div>

      {videoData && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-900/20 to-gray-900/20 border border-green-800/30 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-2">✅ Video Production Complete</h3>
            <p className="text-gray-400">Your cinematic mystery video is ready for review and upload</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Video Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Video ID:</span>
                  <span className="text-white font-mono">{videoData.videoId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{videoData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resolution:</span>
                  <span className="text-white">{videoData.resolution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">File Size:</span>
                  <span className="text-white">{videoData.fileSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Format:</span>
                  <span className="text-white">{videoData.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bitrate:</span>
                  <span className="text-white">{videoData.bitrate}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Production Stats</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-400 mb-1">Visual Effects</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(videoData.effects).map(([key, value]) => (
                      <span key={key} className="px-2 py-1 bg-purple-900/20 text-purple-400 text-xs rounded">
                        {value as string}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Audio Production</div>
                  <div className="space-y-1">
                    <div className="text-white text-xs">Voice: {videoData.audio.voiceover}</div>
                    <div className="text-white text-xs">Music: {videoData.audio.music}</div>
                    <div className="text-white text-xs">SFX: {videoData.audio.soundEffects} effects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Video Segments</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {videoData.segments.map((segment: any) => (
                <div key={segment.id} className="bg-black/30 rounded-lg p-3">
                  <div className="text-white font-medium text-sm mb-1">{segment.title}</div>
                  <div className="text-gray-400 text-xs mb-2">{segment.duration}</div>
                  <span className="text-green-400 text-xs">✓ Complete</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
              👁️ Preview Video
            </button>
            <button className="px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors">
              📥 Download Video
            </button>
            <button className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white rounded-lg transition-colors">
              📤 Proceed to Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
