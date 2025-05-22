const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.t6B0audz.js",app:"_app/immutable/entry/app.DHd9Vnuk.js",imports:["_app/immutable/entry/start.t6B0audz.js","_app/immutable/chunks/CJSrTErS.js","_app/immutable/chunks/DNLAU315.js","_app/immutable/chunks/DIxEl2em.js","_app/immutable/entry/app.DHd9Vnuk.js","_app/immutable/chunks/DNLAU315.js","_app/immutable/chunks/LqqWryql.js","_app/immutable/chunks/BXtezOo-.js","_app/immutable/chunks/DIxEl2em.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-d4d06e8b.js')),
			__memo(() => import('./chunks/1-5386b93f.js')),
			__memo(() => import('./chunks/2-493825b4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
